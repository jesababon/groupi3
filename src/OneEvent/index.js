import React, { Component } from "react";
import "./style.css";
import EventDetails from '../EventDetails';

class OneEvent extends Component {

     constructor(props){
          super(props)

          this.state = {
             event_id:0,
             title: "",
             formatted_datetime: ""
          }
      }
  
  componentDidMount () {
      let id=this.props.match.event_id;
      fetch(`/api-events/${id}.json`)
      .then(response => response.json())
      .then(event => {
          this.setState({
              id:event.event_id,
              title:event.title,
              formatted_datetime:event.date
          });
      });
  }


 render(){
       return(
         <div className="OneEvent">
             <EventDetails
                    event_id={this.state.event_id}
                    title={this.state.title}
                    date={this.state.formatted_datetime}
                    // venue={event.venue.name}
                    // location={event.formatted_location}
                    // facebook_url={event.facebook_rsvp_url}
                    // ticket_status={event.ticket_status}
                    // ticket_link={event.ticket_url} 
                    />
        </div>
       );
    };
}

export default OneEvent;
