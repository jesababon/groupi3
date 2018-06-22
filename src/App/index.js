
import React, { Component } from "react";
import "./style.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import EventPage from "../EventPage";
import Homepage from '../HomePage';
import Login from "../Login";
import Register from "../Register";
import OneEvent from "../OneEvent";
import Comments from "../Comments";
import CreateComment from "../CreateComment";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userLoggedIn: false
    }
    this.updateUserLoggedIn = this.updateUserLoggedIn.bind(this);

    window.addEventListener("load", function (event) {
      console.log("All resources finished loading!");
    });
  }

  updateUserLoggedIn(user) {
    this.setState({
      userLoggedIn: true,
      userId: user.id
    });
  }

  render() {
    return (
      <Router>
        <div>
          {this.state.userLoggedIn && (
            <div className="App">
              <h1>Groupi3</h1>
              <Login onUserLoggedIn={this.updateUserLoggedIn} />
              <Register onUserLoggedIn={this.updateUserLoggedIn} />
            </div>
          )}
          {!this.state.userLoggedIn && (
            <div>
              <h1>Groupi3</h1>
              <div>
                <Route path="/" exact component={Homepage} />
                <Route path="/events" exact component={EventPage} />
                <Route path="/event/:id" exact component={OneEvent} />
                <Route path="/comments" exact component={Comments} />
                <Route path="/create-comment" exact component={CreateComment} />
              </div>
            </div>
          )}
        </div>
      </Router>
    )
  }
}

export default App;
