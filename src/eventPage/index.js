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
         <div className="EventPage">
          {this.state.events.map( event =>{
            return <EventDetails 
                    title={event.title}
                    date={event.formatted_datetime}
                    venue={event.venue.name}
                    city={event.venue.city}
                    ticket_link={event.ticket_url} />
          })}
        </div>
       );
    };
}

export default EventPage;
