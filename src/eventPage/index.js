import React, { Component } from "react";
import "./style.css";
import EventDetails from '../EventDetails';

class EventPage extends Component {

     constructor(props){
          super(props)

          this.state = {
             events: []
          }
      }
  
  componentDidMount () {
      fetch('/api-events.json')
      .then(response => response.json())
      .then(events => {
          this.setState({
              events: events
          });
      });
  }

 render(){
       return(     
         <div className="EventPage" key={"allEvents"}>
          {this.state.events.map( (event, index) =>{
            return <EventDetails 
                    id={index}
                    event_id={event.id}
                    title={event.title}
                    date={event.formatted_datetime}
                    venue={event.venue.name}
                    location={event.formatted_location}
                    facebook_url={event.facebook_rsvp_url}
                    ticket_status={event.ticket_status}
                    ticket_link={event.ticket_url} 
                    key={event.index}
                    />
          })}
        </div>
       );
    };
}

export default EventPage;
