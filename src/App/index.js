import React, { Component } from "react";
import "./style.css";
import { BrowserRouter as Router, Route} from "react-router-dom";
import EventPage from "../EventPage";
import Homepage from '../HomePage';
import Login from "../Login";
import Register from "../Register";
import OneEvent from "../OneEvent";
import Comments from "../Comments";
import CreateComment from "../CreateComment";
import OneComment from "../OneComment";
import UpdateComment from "../UpdateComment";
import DeleteComment from "../DeleteComment";
import Search from "../Search";


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
          <header>
          <h1 className="title">Groupi3</h1>
          </header>
          {this.state.userLoggedIn && (
            <div className="App">
              <Login onUserLoggedIn={this.updateUserLoggedIn} />
              <Register onUserLoggedIn={this.updateUserLoggedIn} />
            </div>
          )}
          {!this.state.userLoggedIn && (
            <div className="container">
              <div>
                <Route path="/" exact component={Homepage} />
                <Route path="/events" exact component={EventPage} />
                <Route path="/event/:id" exact component={OneEvent} />
                <Route path="/comments" exact component={Comments} />
                <Route path="/create-comment" exact component={CreateComment} />
                <Route path="/comment/:id" exact component={OneComment} />
                <Route path="/update-comment/:id" exact component={UpdateComment} />
                <Route path="/delete-comment/:id" exact component={DeleteComment} />
              </div>
            </div> 
          )}
        </div>
      </Router>
    )
  }
}

export default App;
