import React, { Component } from "react";
import "./style.css";
class EventDetails extends Component {
  render() {
    return (
      <div className="buttons">
        <form action="/" method="get">
        <button type="submit">HOME</button>
        </form>
        <div className="detailsbox">
      <div className="EventDetails" key={"oneEvent"}>
          <h4>{this.props.title}</h4>
          <p className="eventID"><strong>Event ID:</strong>{this.props.event_id}</p>
          <p><strong>Date:</strong>  {this.props.date}</p>
          <p><strong>Venue:</strong> {this.props.venue}</p>
          <p><strong>Location:</strong> {this.props.location}</p>
          <p><a href={this.props.facebook_url} target="_blank">RSVP on Facebook</a></p>
          <p><span>Tickets are {this.props.ticket_status} </span><a href={this.props.ticket_link} target="_blank">Get Tickets </a></p>
          <p><a href={'event/'+this.props.event_id}>View Details</a></p>
      </div>
      </div>
      </div>
    );
  }
}

export default EventDetails;