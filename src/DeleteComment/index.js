import React, { Component } from "react";
import "./style.css";

class DeleteComment extends Component{
    constructor(props) {
      super(props)
    
      this.state = {
        content: "",
        deleted: false
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
    const deleteComment = {
      id: this.props.id,
      content: this.state.content
    }
    fetch(`/comment/${this.state.id}.json`, {
      method: "DELETE",
      body: JSON.stringify(deleteComment),
      headers: {
        "Content-type": "application/json"
      }
    }).then(response => response.json())
    .then(comment => {
      this.setState({
        deleted: true
      });
    });
  }

  render() {
    if (this.state.deleted === true) {
      return window.location.reload();
    }
    return (
      <div className="DeleteComment">
        <form onChange={this.onFormChange} onSubmit={this.onFormSubmit}>
            <p class="hidden">
            <label for="content">
            <p>Delete?</p>
            </label>
            <input
              type="text"
              name="DELETE"
              placeholder = {this.props.content}
              value={this.props.id}
            />
            </p>
          <p>
            <button class="deleteButton" action="submit" name='DELETE' value={this.props.id}>DELETE</button>
          </p>        
          </form>
      </div>
    );
  }
}

export default DeleteComment;