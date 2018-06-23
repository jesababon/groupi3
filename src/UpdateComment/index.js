import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./style.css";

class UpdateComment extends Component{
    constructor(props) {
      super(props)
    
      this.state = {
         username: "",
         content: "",
         created: false
      }
    this.onFormChange = this.onFormChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    }
     onFormChange(evt) {
    const element = evt.target;
    const name = element.name;
    const value = element.value;
    const newState = {};
    newState[name] = value;
    this.setState(newState);
  }

  onFormSubmit(evt) {
    evt.preventDefault();
    const newComment = {
      username: this.state.username,
      content: this.state.content
    }
    fetch('/comments', {
      method: "POST",
      body: JSON.stringify(newComment),
      headers: {
        "Content-type": "application/json"
      }
    }).then(response => response.json())
    .then(comment => {
      this.setState({
        created: true
      });
    });
  }

  render() {
    //
    if (this.state.created === true) {
      return <Redirect to="/comments" />;
    }
    return (
      <div className="CreateComment">
        <form onChange={this.onFormChange} onSubmit={this.onFormSubmit}>
          <p>
            <label for="content">Content</label>
            <input
              type="text"
              name="content"
              placeholder="content"
              value={this.state.content}
            />
          </p>
          <p>
            <input type="submit" value="Submit" />
          </p>
        </form>
      </div>
    );
  }
}

export default UpdateComment;