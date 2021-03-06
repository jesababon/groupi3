import React, { Component } from "react";
import "./style.css";

class CreateComment extends Component{
    constructor(props) {
      super(props)
    
      this.state = {
         username: "",
         event_id: "",
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
      events_id: this.state.event_id,
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
      return window.location.reload();
    }
    return (
      <div className="CreateComment">
        <form onChange={this.onFormChange} onSubmit={this.onFormSubmit}>
          <p>
            <label htmlFor="content">Content</label>
            <input
              type="text"
              name="content"
              placeholder="Say something nice"
              value={this.state.content}
            />
          </p>
          <p>
            <input type="submit" value="Add Comment"/>
          </p>
        </form>
      </div>
    );
  }
}

export default CreateComment;