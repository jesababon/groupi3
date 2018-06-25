import React, { Component } from "react";
import { Redirect } from 'react-router'
import { Link } from "react-router-dom";
import "./style.css";

class HomePage extends Component {

  constructor(props) {
    super(props)

    this.state = {
      submitted: false,
    }
    this.onFormChange = this.onFormChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormChange(event) {
    const element = event.target;
    const name = element.name;
    const value = element.value;
    const newState = {};
    newState[name] = value;
    this.setState(newState)
  }

  onFormSubmit(event) {
    event.preventDefault();
    const search = {
      search: this.state.search,
    }

    fetch('/api-events.json', {
      method: "POST",
      body: JSON.stringify(search),
      headers: {
        "Content-type": "application/json"
      }
    }).then(response => response.json())
      .then(search => {
        this.setState({
          submitted: true,
        });
      });
  }

  render() {
    if (this.state.submitted === true) {
      return <Redirect to="/events" />;
    }

    return (
      <div className="container">
        <nav>
          <span className="eventRegister">Register LogIn</span>
          <span><Link to="/events">See All Events</Link></span>
        </nav>
        <div className="landingBody">
          <form onChange={this.onFormChange} onSubmit={this.onFormSubmit}>
            <p>Enter an Artist Name to see their events</p>
            <input type="text" name='search'/>
            <button type="submit">Find Events</button>
          </form>
          <div className="footer">
            <footer>Copyright Group3</footer>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
