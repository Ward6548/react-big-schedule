import * as antdLocale from 'antd/locale/en_US';
import * as dayjsLocale from 'dayjs/locale/en';
import { Component } from 'react';

import { Scheduler, SchedulerData, ViewType, wrapperFun } from '../../../index';

// Small, self-contained dataset that makes the new time labels
// (e.g. `09:00-10:30 Design`) very easy to see at a glance.
const resources = [
  { id: 'team-a', name: 'Team A' },
  { id: 'team-b', name: 'Team B' },
  { id: 'team-c', name: 'Team C' },
];

const events = [
  {
    id: 100,
    start: '2022-12-19 09:00:00',
    end: '2022-12-19 10:30:00',
    actualStart: '2022-12-19 09:00:00',
    actualEnd: '2022-12-19 09:45:00',
    resourceId: 'team-a',
    title: 'Design',
  },
  {
    id: 101,
    start: '2022-12-19 10:30:00',
    end: '2022-12-19 12:00:00',
    actualStart: '2022-12-19 10:30:00',
    actualEnd: '2022-12-19 11:30:00',
    resourceId: 'team-b',
    title: 'Implement',
  },
  {
    id: 102,
    start: '2022-12-19 13:00:00',
    end: '2022-12-19 14:30:00',
    actualStart: '2022-12-19 13:15:00',
    // No actualEnd yet – should show red dot
    resourceId: 'team-c',
    title: 'Review',
  },
];

class DependenciesTimeLabelsExample extends Component {
  constructor(props) {
    super(props);

    const schedulerData = new SchedulerData('2022-12-19', ViewType.Day, false, false, {
      // Narrower resource column for this focused example
      besidesWidth: 200,
      schedulerContentHeight: '480px',
      dayStartFrom: 8,
      dayStopTo: 19,
      showWeekNumber: true,
      eventItemHeight: 32,
      eventItemLineHeight: 34,
      minuteStep: 15,
      views: [
        { viewName: 'Day', viewType: ViewType.Day, showAgenda: false, isEventPerspective: false },
        { viewName: 'Week', viewType: ViewType.Week, showAgenda: false, isEventPerspective: false },
        { viewName: 'Month', viewType: ViewType.Month, showAgenda: false, isEventPerspective: false },
      ],
    });

    schedulerData.setSchedulerLocale(dayjsLocale);
    schedulerData.setCalendarPopoverLocale(antdLocale);
    schedulerData.setResources(resources);
    schedulerData.setEvents(events);

    this.state = {
      viewModel: schedulerData,
    };
  }

  // Simple linear dependency chain that clearly shows finish → start arrows
  getDependencies = () => [
    { fromId: 100, toId: 101, color: '#4a90e2' },
    { fromId: 101, toId: 102, color: '#52c41a' },
  ];

  render() {
    const { viewModel } = this.state;

    return (
      <Scheduler
        schedulerData={viewModel}
        prevClick={this.prevClick}
        nextClick={this.nextClick}
        onSelectDate={this.onSelectDate}
        onViewChange={this.onViewChange}
        toggleExpandFunc={this.toggleExpandFunc}
        eventItemTemplateResolver={this.eventItemTemplateResolver}
        dependencies={this.getDependencies()}
      />
    );
  }

  prevClick = schedulerData => {
    schedulerData.prev();
    schedulerData.setEvents(events);
    this.setState({ viewModel: schedulerData });
  };

  nextClick = schedulerData => {
    schedulerData.next();
    schedulerData.setEvents(events);
    this.setState({ viewModel: schedulerData });
  };

  onViewChange = (schedulerData, view) => {
    schedulerData.setViewType(view.viewType, view.showAgenda, view.isEventPerspective);
    schedulerData.setEvents(events);
    this.setState({ viewModel: schedulerData });
  };

  onSelectDate = (schedulerData, date) => {
    schedulerData.setDate(date);
    schedulerData.setEvents(events);
    this.setState({
      viewModel: schedulerData,
    });
  };

  toggleExpandFunc = (schedulerData, slotId) => {
    schedulerData.toggleExpandStatus(slotId);
    this.setState({ viewModel: schedulerData });
  };

  // Custom renderer to visualize actual vs scheduled time and missing actualEnd
  eventItemTemplateResolver = (schedulerData, event, bgColor, isStart, isEnd, cssClass, height) => {
    const { localeDayjs } = schedulerData;

    // Compute completion percentage from actual window vs scheduled window
    let completedPercent = 0;
    if (event.actualStart && event.actualEnd) {
      const scheduledStart = localeDayjs(new Date(event.start));
      const scheduledEnd = localeDayjs(new Date(event.end));
      const actualStart = localeDayjs(new Date(event.actualStart));
      const actualEnd = localeDayjs(new Date(event.actualEnd));

      const scheduledDuration = scheduledEnd.diff(scheduledStart, 'second');
      if (scheduledDuration > 0) {
        const overlapStart = actualStart.isAfter(scheduledStart) ? actualStart : scheduledStart;
        const overlapEnd = actualEnd.isBefore(scheduledEnd) ? actualEnd : scheduledEnd;
        const overlap = overlapEnd.diff(overlapStart, 'second');
        if (overlap > 0) {
          completedPercent = Math.max(0, Math.min(1, overlap / scheduledDuration));
        }
      }
    }

    const title = schedulerData.behaviors.getEventTextFunc(schedulerData, event);

    return (
      <div
        className={cssClass}
        style={{ height, backgroundColor: bgColor, position: 'relative', paddingRight: 24, borderRadius: 6 }}
      >
        {completedPercent > 0 && (
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              bottom: 0,
              width: `${completedPercent * 100}%`,
              backgroundColor: 'rgba(0, 0, 0, 0.2)',
            }}
          />
        )}
        {/* Red dot when there is no actualEnd yet */}
        {!event.actualEnd && (
          <span
            style={{
              position: 'absolute',
              right: 8,
              top: '50%',
              transform: 'translateY(-50%)',
              width: 10,
              height: 10,
              borderRadius: '50%',
              backgroundColor: 'red',
              zIndex: 2,
            }}
          />
        )}
        <span
          style={{
            marginLeft: 10,
            lineHeight: `${height}px`,
            position: 'relative',
            zIndex: 1,
          }}
        >
          {title}
        </span>
      </div>
    );
  };
}

export default wrapperFun(DependenciesTimeLabelsExample);
