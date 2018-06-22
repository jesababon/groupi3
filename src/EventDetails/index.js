import React, { Component } from "react";
import "./style.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class EventDetails extends Component {
  //   constructor(props) {
  //   super(props);

  //   this.state = {
  //     events: []

  //   }
  // }

  // componentDidMount() {
  //   let id = this.props.event_id;
  //   console.log(id);
  //   fetch(`/events/`)
  //     .then(event => {
  //       this.setState({
  //         event_id: event.id,
  //         title: event.title,
  //         date: event.date,
  //         venue: event.venue,
  //         location: event.location,
  //         facebook_url: event.facebook_url,
  //         ticket_status: event.ticket_status,
  //         ticket_link: event.ticket_link,
  //       });
  //     });
  // }
  render() {
    return (
      <div className="EventDetails">
          <h4>{this.props.title}</h4>
          <p className="eventID"><strong>Event ID:</strong>{this.props.event_id}</p>
          <p><strong>Date:</strong>  {this.props.date}</p>
          <p><strong>Venue:</strong> {this.props.venue}</p>
          <p><strong>Location:</strong> {this.props.location}</p>
          <p><a href={this.props.facebook_url} target="_blank">RSVP on Facebook</a></p>
          <p><span>Tickets are {this.props.ticket_status} </span><a href={this.props.ticket_link} target="_blank">Get Tickets </a></p>
          <p><a href={'event/'+this.props.event_id}>View Details</a></p>
      </div>
    );
  }
}

export default EventDetails;