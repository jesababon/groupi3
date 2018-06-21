import React, { Component } from "react";
import "./style.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class EventDetails extends Component {
  render() {
    return (
      <div className="EventDetails">
          {/* <p><Link to="/eventPage/">{this.props.artist_id} </Link></p> */}
          <h4>Event Title: {this.props.title}</h4>
          <p><strong>Date:</strong>  {this.props.date}</p>
          <p><strong>Venue:</strong> {this.props.venue}</p>
          <p><strong>City:</strong> {this.props.city}</p>
          <p><a href={this.props.ticket_link} target="_blank">Get Tickets </a></p>
      </div>
    );
  }
}

export default EventDetails;