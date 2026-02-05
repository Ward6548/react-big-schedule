import PropTypes from 'prop-types';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';

// Shallow structural comparison to avoid unnecessary state updates
const segmentsEqual = (a, b) => {
  if (a === b) return true;
  if (!a || !b) return false;
  if (a.length !== b.length) return false;

  // Compare the minimal fields that affect rendering
  for (let i = 0; i < a.length; i += 1) {
    const sa = a[i];
    const sb = b[i];
    if (!sb) return false;
    if (sa.key !== sb.key) return false;
    if (sa.color !== sb.color) return false;
    if (sa.pathD !== sb.pathD) return false;
    if (!sa.arrow || !sb.arrow) return false;
    if (
      sa.arrow.tipX !== sb.arrow.tipX ||
      sa.arrow.tipY !== sb.arrow.tipY ||
      sa.arrow.baseX !== sb.arrow.baseX ||
      sa.arrow.size !== sb.arrow.size
    ) {
      return false;
    }
  }

  return true;
};

/**
 * Global overlay that renders dependency arrows between events,
 * potentially across different resources/lanes.
 *
 * It inspects the DOM for `.timeline-event` elements that have
 * a `data-event-id` attribute and draws SVG connectors between
 * matching `fromId`/`toId` pairs.
 */
function DependencyOverlay({ dependencies }) {
  const overlayRef = useRef(null);
  const [segments, setSegments] = useState([]);
  const [layoutVersion, setLayoutVersion] = useState(0);

  // Recalculate positions when the scroll container scrolls or the window resizes
  useEffect(() => {
    const overlayEl = overlayRef.current;
    if (!overlayEl) return undefined;

    // scrollContainer is the div with overflow that wraps the scheduler content
    const scrollContainer = overlayEl.parentElement?.parentElement?.parentElement;
    if (!scrollContainer) return undefined;

    const handleLayoutChange = () => {
      setLayoutVersion(prev => prev + 1);
    };

    scrollContainer.addEventListener('scroll', handleLayoutChange);
    window.addEventListener('resize', handleLayoutChange);

    // Kick one or two initial recalculations so we catch late layout changes
    // (fonts, header height, async content) even before the user scrolls.
    handleLayoutChange();
    const timerId = setTimeout(handleLayoutChange, 50);

    return () => {
      scrollContainer.removeEventListener('scroll', handleLayoutChange);
      window.removeEventListener('resize', handleLayoutChange);
      clearTimeout(timerId);
    };
  }, []);

  useLayoutEffect(() => {
    const overlayEl = overlayRef.current;
    if (!overlayEl) {
      setSegments([]);
      return;
    }

    // Limit search to the current scheduler content
    const root = overlayEl.parentElement;
    if (!root || !Array.isArray(dependencies) || dependencies.length === 0) {
      setSegments([]);
      return;
    }

    const overlayRect = overlayEl.getBoundingClientRect();
    const eventNodes = root.querySelectorAll('.timeline-event[data-event-id]');
    const eventMap = new Map();

    eventNodes.forEach(node => {
      const id = node.getAttribute('data-event-id');
      if (!id) return;
      const rect = node.getBoundingClientRect();

      // Coordinates in the overlay's local coordinate space
      const left = rect.left - overlayRect.left;
      const right = rect.right - overlayRect.left;
      const top = rect.top - overlayRect.top;
      const bottom = rect.bottom - overlayRect.top;

      eventMap.set(id, { left, right, top, bottom });
    });

    const newSegments = [];

    dependencies.forEach((dep, index) => {
      if (!dep) return;

      const from = eventMap.get(String(dep.fromId));
      const to = eventMap.get(String(dep.toId));

      if (!from || !to) return;

      // Always draw from the finish (right edge) of the `from` event
      // to the start (left edge) of the `to` event.
      const startX = from.right;
      const startY = (from.top + from.bottom) / 2;
      const endX = to.left;
      const endY = (to.top + to.bottom) / 2;

      // Route the connector below both events to reduce overlap with content
      const verticalOffset = 12;
      const baseY = Math.max(startY, endY) + verticalOffset;

      // Separate different dependencies slightly to avoid perfect overlap
      const laneSpacing = 8;
      const laneY = baseY + index * laneSpacing;

      const arrowSize = 10;
      const arrowMargin = 4; // keep arrow head just outside the event box
      const arrowBaseX = endX - arrowSize - arrowMargin;

      const pathD = `M ${startX} ${startY} L ${startX} ${laneY} L ${arrowBaseX} ${laneY} L ${arrowBaseX} ${endY}`;

      const strokeColor = dep.color || '#595959';

      newSegments.push({
        key: `dep-${index}`,
        color: strokeColor,
        pathD,
        arrow: {
          tipX: endX,
          tipY: endY,
          baseX: arrowBaseX,
          size: arrowSize,
        },
      });
    });

    setSegments(prev => (segmentsEqual(prev, newSegments) ? prev : newSegments));
  }, [dependencies, layoutVersion]);

  if (!segments.length) {
    return <svg ref={overlayRef} className="dependency-arrows" />;
  }

  return (
    <svg ref={overlayRef} className="dependency-arrows">
      {segments.map(seg => {
        const { tipX, tipY, baseX, size } = seg.arrow;
        const half = size / 2;
        const points = `${tipX},${tipY} ${baseX},${tipY - half} ${baseX},${tipY + half}`;

        return (
          <g key={seg.key}>
            <path
              d={seg.pathD}
              fill="none"
              stroke={seg.color}
              strokeWidth="3"
              strokeLinecap="square"
              strokeLinejoin="miter"
            />
            <polygon points={points} fill={seg.color} />
          </g>
        );
      })}
    </svg>
  );
}

DependencyOverlay.propTypes = {
  dependencies: PropTypes.arrayOf(
    PropTypes.shape({
      fromId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      toId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      color: PropTypes.string,
    })
  ),
};

DependencyOverlay.defaultProps = {
  dependencies: undefined,
};

export default DependencyOverlay;
