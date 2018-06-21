import React, { Component } from "react";
import "./style.css";

class EventDetails extends Component {
  render() {
    return (
      <div className="EventDetails">
        <p>Artist ID: {this.props.artist_id}</p>
        <p>Artist Name: {this.props.artist_name}</p>
        <p>Date: {this.props.date}</p>
        <p>Venue: {this.props.venue}</p>
        <p>Address: {this.props.address}</p>
        <p>Get Tickets: {this.props.ticket_link}</p>
      </div>
    );
  }
}

export default EventDetails;