import React, { Component } from "react";
import "./style.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class EventDetails extends Component {
  render() {
    return (
      <div className="EventDetails">
      <div className="eventPage">
        <p><Link to="/eventPage/">{this.props.artist_id}</p>
        <p>Artist Name: {this.props.artist_name}</p>
        <p>Date: {this.props.date}</p>
        <p>Venue: {this.props.venue}</p>
        <p>Address: {this.props.address}</p>
        <p>Get Tickets: {this.props.ticket_link}</p>
      </div>
      </div>
    );
  }
}

export default EventDetails;