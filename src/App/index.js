
import React, { Component } from "react";
import "./style.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import EventPage from "../EventPage";
import Homepage from '../HomePage';
import Login from "../Login";
import Register from "../Register";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userLoggedIn: false
    }
    this.updateUserLoggedIn = this.updateUserLoggedIn.bind(this);
  }

  updateUserLoggedIn(user) {
    this.setState({
      userLoggedIn: true,
      userId: user.id
    });
  }

  render() {


    if (!this.state.userLoggedIn) {
      return (
        <div className="App">
          <h1>Groupi3</h1>
          <Login onUserLoggedIn={this.updateUserLoggedIn} />
          <Register onUserLoggedIn={this.updateUserLoggedIn} />
        </div>
      );
    }
    return (
      <Router>
        <div className="App">
          <h1>Groupi3</h1>
          <Route path="/" component={Homepage} />
        </div>
      </Router>
    );
  }
}

export default App;
