
import React, { Component } from "react";
import "./style.css";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
    this.onFormChange = this.onFormChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormChange(event) {
    const name = event.target.getAttribute('name');
    const value = event.target.value;
    const newState = {};
    newState[name] = value;
    this.setState(newState);
  }

  onFormSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className="Register">
        <form onChange={this.onFormChange} onSubmit={this.onFormSubmit}>
          <h2>Register:</h2>
          <p>Username <input type="text" name="username" value={this.state.username} /></p>
          <p>Password <input type="text" name="password" value={this.state.password} /></p>
          <p><input type="submit" value="submit" /></p>
        </form>
      </div>
    );
  }
}

export default Register;