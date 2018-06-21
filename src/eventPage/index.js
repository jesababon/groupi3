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
      fetch('/events.json')
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
            return <EventDetails />
          })}
        </div>
       );
    };
}


export default EventPage;
