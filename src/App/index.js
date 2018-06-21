import React, { Component } from "react";
import "./style.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import EventPage from "../EventPage";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" exact component={EventPage} />
        </div>
      </Router>
    )
    // return <div className="App">Hello World</div>;

  }
}

export default App;
