import React, { Component } from "react";
import "./style.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class EventDetails extends Component {
  render() {
    return (
      <div className="EventDetails">
          <h4>{this.props.title}</h4>
          <p><strong>Date:</strong>  {this.props.date}</p>
          <p><strong>Venue:</strong> {this.props.venue}</p>
          <p><strong>Location:</strong> {this.props.location}</p>
          <p><a href={this.props.facebook_url} target="_blank">RSVP on Facebook</a></p>
          <p><span>Tickets are {this.props.ticket_status} </span><a href={this.props.ticket_link} target="_blank">Get Tickets </a></p>
      </div>
    );
  }
}

export default EventDetails;