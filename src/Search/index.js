import React, { Component } from "react";
import { Redirect } from 'react-router'
import "./style.css";

class Search extends Component {

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
      <div className="searchbar">
          <form onChange={this.onFormChange} onSubmit={this.onFormSubmit}>
            <p>Search</p>
            <input type="text" name='search'/>
            <button type="submit">Find Events</button>
          </form>
    </div>
    );
  }
}

export default Search;
