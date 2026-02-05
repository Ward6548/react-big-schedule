import * as antdLocale from 'antd/locale/en_US';
import * as dayjsLocale from 'dayjs/locale/en';
import { Component } from 'react';

import { DemoData, Scheduler, SchedulerData, ViewType, wrapperFun } from '../../../index';

class DependenciesExample extends Component {
  constructor(props) {
    super(props);

    const schedulerData = new SchedulerData('2022-12-19', ViewType.Week, false, false, {
      besidesWidth: 300,
      dayMaxEvents: 30,
      weekMaxEvents: 30,
      monthMaxEvents: 30,
      quarterMaxEvents: 30,
      yearMaxEvents: 30,
      customMaxEvents: 30,
      schedulerContentHeight: '100%',
      showWeekNumber: true,
    });

    schedulerData.setSchedulerLocale(dayjsLocale);
    schedulerData.setCalendarPopoverLocale(antdLocale);
    schedulerData.setResources(DemoData.resources);
    schedulerData.setEvents(DemoData.events);

    this.state = {
      viewModel: schedulerData,
    };
  }

  // Simple static dependency list for the demo.
  // These intentionally cross different resources/lanes to prove cross-lane support.
  getDependencies = () => [
    // From Resource 1 (id: 9) to Resource 2 (id: 2)
    { fromId: 9, toId: 2, color: '#4a90e2' },
    // From Resource 2 (id: 2) to Resource 3 (id: 3)
    { fromId: 2, toId: 3, color: '#52c41a' },
    // From Resource 3 (id: 3) to Resource 4 (id: 4)
    { fromId: 3, toId: 4, color: '#fa8c16' },
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
        dependencies={this.getDependencies()}
      />
    );
  }

  prevClick = schedulerData => {
    schedulerData.prev();
    schedulerData.setEvents(DemoData.events);
    this.setState({ viewModel: schedulerData });
  };

  nextClick = schedulerData => {
    schedulerData.next();
    schedulerData.setEvents(DemoData.events);
    this.setState({ viewModel: schedulerData });
  };

  onViewChange = (schedulerData, view) => {
    schedulerData.setViewType(view.viewType, view.showAgenda, view.isEventPerspective);
    schedulerData.setEvents(DemoData.events);
    this.setState({ viewModel: schedulerData });
  };

  onSelectDate = (schedulerData, date) => {
    schedulerData.setDate(date);
    schedulerData.setEvents(DemoData.events);
    this.setState({
      viewModel: schedulerData,
    });
  };

  toggleExpandFunc = (schedulerData, slotId) => {
    schedulerData.toggleExpandStatus(slotId);
    this.setState({ viewModel: schedulerData });
  };
}
export default wrapperFun(DependenciesExample);
