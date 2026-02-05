"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = require("react");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; } // Shallow structural comparison to avoid unnecessary state updates
var segmentsEqual = function segmentsEqual(a, b) {
  if (a === b) return true;
  if (!a || !b) return false;
  if (a.length !== b.length) return false;

  // Compare the minimal fields that affect rendering
  for (var i = 0; i < a.length; i += 1) {
    var sa = a[i];
    var sb = b[i];
    if (!sb) return false;
    if (sa.key !== sb.key) return false;
    if (sa.color !== sb.color) return false;
    if (sa.pathD !== sb.pathD) return false;
    if (!sa.arrow || !sb.arrow) return false;
    if (sa.arrow.tipX !== sb.arrow.tipX || sa.arrow.tipY !== sb.arrow.tipY || sa.arrow.baseX !== sb.arrow.baseX || sa.arrow.size !== sb.arrow.size) {
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
function DependencyOverlay(_ref) {
  var dependencies = _ref.dependencies;
  var overlayRef = (0, _react.useRef)(null);
  var _useState = (0, _react.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    segments = _useState2[0],
    setSegments = _useState2[1];
  var _useState3 = (0, _react.useState)(0),
    _useState4 = _slicedToArray(_useState3, 2),
    layoutVersion = _useState4[0],
    setLayoutVersion = _useState4[1];

  // Recalculate positions when the scroll container scrolls or the window resizes
  (0, _react.useEffect)(function () {
    var _overlayEl$parentElem;
    var overlayEl = overlayRef.current;
    if (!overlayEl) return undefined;

    // scrollContainer is the div with overflow that wraps the scheduler content
    var scrollContainer = (_overlayEl$parentElem = overlayEl.parentElement) === null || _overlayEl$parentElem === void 0 || (_overlayEl$parentElem = _overlayEl$parentElem.parentElement) === null || _overlayEl$parentElem === void 0 ? void 0 : _overlayEl$parentElem.parentElement;
    if (!scrollContainer) return undefined;
    var handleLayoutChange = function handleLayoutChange() {
      setLayoutVersion(function (prev) {
        return prev + 1;
      });
    };
    scrollContainer.addEventListener('scroll', handleLayoutChange);
    window.addEventListener('resize', handleLayoutChange);

    // Kick one or two initial recalculations so we catch late layout changes
    // (fonts, header height, async content) even before the user scrolls.
    handleLayoutChange();
    var timerId = setTimeout(handleLayoutChange, 50);
    return function () {
      scrollContainer.removeEventListener('scroll', handleLayoutChange);
      window.removeEventListener('resize', handleLayoutChange);
      clearTimeout(timerId);
    };
  }, []);
  (0, _react.useLayoutEffect)(function () {
    var overlayEl = overlayRef.current;
    if (!overlayEl) {
      setSegments([]);
      return;
    }

    // Limit search to the current scheduler content
    var root = overlayEl.parentElement;
    if (!root || !Array.isArray(dependencies) || dependencies.length === 0) {
      setSegments([]);
      return;
    }
    var overlayRect = overlayEl.getBoundingClientRect();
    var eventNodes = root.querySelectorAll('.timeline-event[data-event-id]');
    var eventMap = new Map();
    eventNodes.forEach(function (node) {
      var id = node.getAttribute('data-event-id');
      if (!id) return;
      var rect = node.getBoundingClientRect();

      // Coordinates in the overlay's local coordinate space
      var left = rect.left - overlayRect.left;
      var right = rect.right - overlayRect.left;
      var top = rect.top - overlayRect.top;
      var bottom = rect.bottom - overlayRect.top;
      var centerY = (top + bottom) / 2;

      // Events can render as multiple DOM fragments (e.g. multi-day events).
      // Track the leftmost and rightmost fragments so "start" and "finish" anchors
      // are stable regardless of DOM order.
      var prev = eventMap.get(id);
      if (!prev) {
        eventMap.set(id, {
          minLeft: left,
          minLeftY: centerY,
          maxRight: right,
          maxRightY: centerY
        });
        return;
      }
      if (left < prev.minLeft) {
        prev.minLeft = left;
        prev.minLeftY = centerY;
      }
      if (right > prev.maxRight) {
        prev.maxRight = right;
        prev.maxRightY = centerY;
      }
    });
    var newSegments = [];
    dependencies.forEach(function (dep, index) {
      if (!dep) return;
      var from = eventMap.get(String(dep.fromId));
      var to = eventMap.get(String(dep.toId));
      if (!from || !to) return;

      // Always draw from the finish (right edge) of the `from` event
      // to the start (left edge) of the `to` event.
      var startX = from.maxRight;
      var startY = from.maxRightY;
      var endX = to.minLeft;
      var endY = to.minLeftY;

      // Route the connector below both events to reduce overlap with content
      var verticalOffset = 12;
      var baseY = Math.max(startY, endY) + verticalOffset;

      // Separate different dependencies slightly to avoid perfect overlap
      var laneSpacing = 8;
      var laneY = baseY + index * laneSpacing;
      var arrowSize = 10;
      var arrowMargin = 4; // keep arrow head just outside the event box
      var arrowBaseX = endX - arrowSize - arrowMargin;

      // Start flat for a short distance before dropping to the lane
      var exitDx = 12;
      var exitX = startX + exitDx;
      var pathD = "M ".concat(startX, " ").concat(startY, " L ").concat(exitX, " ").concat(startY, " L ").concat(exitX, " ").concat(laneY, " ") + "L ".concat(arrowBaseX, " ").concat(laneY, " L ").concat(arrowBaseX, " ").concat(endY);
      var strokeColor = dep.color || '#595959';
      newSegments.push({
        key: "dep-".concat(index),
        color: strokeColor,
        pathD: pathD,
        arrow: {
          tipX: endX,
          tipY: endY,
          baseX: arrowBaseX,
          size: arrowSize
        }
      });
    });
    setSegments(function (prev) {
      return segmentsEqual(prev, newSegments) ? prev : newSegments;
    });
  }, [dependencies, layoutVersion]);
  if (!segments.length) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)("svg", {
      ref: overlayRef,
      className: "dependency-arrows"
    });
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("svg", {
    ref: overlayRef,
    className: "dependency-arrows",
    children: segments.map(function (seg) {
      var _seg$arrow = seg.arrow,
        tipX = _seg$arrow.tipX,
        tipY = _seg$arrow.tipY,
        baseX = _seg$arrow.baseX,
        size = _seg$arrow.size;
      var half = size / 2;
      var points = "".concat(tipX, ",").concat(tipY, " ").concat(baseX, ",").concat(tipY - half, " ").concat(baseX, ",").concat(tipY + half);
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)("g", {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
          d: seg.pathD,
          fill: "none",
          stroke: seg.color,
          strokeWidth: "3",
          strokeLinecap: "square",
          strokeLinejoin: "miter"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("polygon", {
          points: points,
          fill: seg.color
        })]
      }, seg.key);
    })
  });
}
DependencyOverlay.propTypes = {
  dependencies: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    fromId: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]).isRequired,
    toId: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]).isRequired,
    color: _propTypes["default"].string
  }))
};
DependencyOverlay.defaultProps = {
  dependencies: undefined
};
var _default = exports["default"] = DependencyOverlay;