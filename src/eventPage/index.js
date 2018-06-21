import React, { Component } from "react";
import "./style.css";

const API = '';

class EventPage extends Component {

    constructor(props){
        super(props)

        this.state = {
            name="",
            date="",
            location="",
            image=""
        }
    }
}

    componentDidMount () {
        let id = this.prop.match.params;
        fetch(API/${id}.json)
        .then(response => response.json())
        .then(event => {
            this.setState({
                name: event.name,
                date: event.date,
                location: event.location,
                image: event.image
            });
        });
    }
    
    render() {
       return (
         <div className="eventPage">
           <Event
           name={this.state.name}
           date={this.state.date}
           location={this.state.location}
           image={this.state.image} 
           />
        </div>
       );
    };


export default eventPage;
