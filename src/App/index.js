
import React, { Component } from "react";
import "./style.css";
import Homepage from '../HomePage';
import eventPage from "../eventPage";
import Login from "../Login";
import Register from "../Register";
import { BrowserRouter as Router, Route } from "react-router-dom";

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
