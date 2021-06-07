import React, {Component} from "react";
import FullCalendar, {formatDate} from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import {INITIAL_EVENTS, createEventId} from "./event-utils";
import './Events.css'

export default class Events extends Component {
  constructor(){
    super()
    this.state = {
    weekendsVisible: true,
    currentEvents: []
  };
}
 render() {
    return (
      <div className="demo-app">
        {this.renderSidebar()}
        <div className="demo-app-main">
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay"
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            weekends={this.state.weekendsVisible}
            initialEvents={INITIAL_EVENTS} 
            select={this.handleDateSelect}
            eventContent={renderEventContent}
            eventClick={this.handleEventClick}
            eventsSet={this.handleEvents}
          />
        </div>
      </div>
    );
  }

  renderSidebar() {
    return (
      <div className="demo-app-sidebar">
        <div className='demo-app-sidebar-section'>
          <h2>All Events ({this.state.currentEvents.length})</h2>
          <ul>{this.state.currentEvents?.map(renderSidebarEvent)}</ul>
        </div>
      </div>
    );
  }

  handleEvents = (events) => {
    this.setState({
      currentEvents: events
    });
  };
}

function renderEventContent (eventInfo){
  
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  );
}

function renderSidebarEvent (event) {
  return (
    <ul key={event.id}>
      <b>
        {formatDate(event.start, {
          year: 'numeric',
          month: 'short',
          day: 'numeric'
        })}
      </b>
      <i>{event.title}</i>
    </ul>
  );
}