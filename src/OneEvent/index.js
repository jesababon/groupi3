import React, { Component } from "react";
import "./style.css";
import EventDetail from '../EventDetail';

const helper = require('../helpers/helper')

class OneEvent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            id: 0,
            title: "",
            formatted_datetime: "",
            venue: "",
            location: "",
            facebook_rsvp_url: "",
            ticket_status: "",
            ticket_url: ""
        }
    }

    componentDidMount() {
        let url = this.props.match.url;
        let id = helper.getId(url) 
        fetch(`/api-events/${id}.json`)
            .then(response => response.json())
            .then(event => {
                console.log(event[0]);
                this.setState({
                    id: event[0].id,
                    title: event[0].title,
                    formatted_datetime: event[0].formatted_datetime,
                    venue: event[0].venue.name,
                    location: event[0].formatted_location,
                    facebook_rsvp_url: event[0].facebook_rsvp_url,
                    ticket_status: event[0].ticket_status,
                    ticket_url: event[0].ticket_url
                });
            });
    }


    render() {
        return (
            <div className="OneEvent">
                <EventDetail
                    event_id={this.state.id}
                    title={this.state.title}
                    date={this.state.formatted_datetime}
                    venue={this.state.venue}
                    location={this.state.location}
                    facebook_url={this.state.facebook_rsvp_url}
                    ticket_status={this.state.ticket_status}
                    ticket_link={this.state.ticket_url} 
                />
            </div>
        );
    };
}

export default OneEvent;
