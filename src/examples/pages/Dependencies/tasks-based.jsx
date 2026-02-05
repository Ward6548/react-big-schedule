import * as antdLocale from 'antd/locale/en_US';
import * as dayjsLocale from 'dayjs/locale/en';
import { Component } from 'react';

import { DemoData, Scheduler, SchedulerData, ViewType, wrapperFun } from '../../../index';

class DependenciesTaskViewExample extends Component {
  constructor(props) {
    super(props);

    const schedulerData = new SchedulerData('2022-12-19', ViewType.Week, false, true, {
      besidesWidth: 260,
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
    schedulerData.setEvents(DemoData.eventsForTaskView);

    this.state = {
      viewModel: schedulerData,
    };
  }

  // Dependencies between events that live in different tasks/resources to show cross-lane arrows
  getDependencies = () => [
    // Task1 on r1 -> Task2 on r2
    { fromId: 1, toId: 2, color: '#4a90e2' },
    // Task2 on r2 -> Task3 on r3
    { fromId: 2, toId: 3, color: '#52c41a' },
    // Task3 on r3 -> Task4 on r7
    { fromId: 3, toId: 7, color: '#fa8c16' },
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
    schedulerData.setEvents(DemoData.eventsForTaskView);
    this.setState({ viewModel: schedulerData });
  };

  nextClick = schedulerData => {
    schedulerData.next();
    schedulerData.setEvents(DemoData.eventsForTaskView);
    this.setState({ viewModel: schedulerData });
  };

  onViewChange = (schedulerData, view) => {
    schedulerData.setViewType(view.viewType, view.showAgenda, view.isEventPerspective);
    schedulerData.setEvents(DemoData.eventsForTaskView);
    this.setState({ viewModel: schedulerData });
  };

  onSelectDate = (schedulerData, date) => {
    schedulerData.setDate(date);
    schedulerData.setEvents(DemoData.eventsForTaskView);
    this.setState({
      viewModel: schedulerData,
    });
  };

  toggleExpandFunc = (schedulerData, slotId) => {
    schedulerData.toggleExpandStatus(slotId);
    this.setState({ viewModel: schedulerData });
  };
}

export default wrapperFun(DependenciesTaskViewExample);
