import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./style.css";

class UpdateComment extends Component{
    constructor(props) {
      super(props)
    
      this.state = {
        id: 0,
        content: "",
        updated: false
      }
    this.onFormChange = this.onFormChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    componentDidMount() {
      let url = this.props.match.url;
      let num = url.replace(/update-comment/i, '')
      let id = num.replace(/\//g, '')
      console.log(id);
      fetch(`/comment/${id}.json`)
        .then(response => response.json())
        .then(comment => {
          console.log(comment);
          this.setState({
            id: comment.id,
            content: comment.content
          });
        });
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
    const updateComment = {
      id: this.state.id,
      content: this.state.content
    }
    fetch(`/comment/${this.state.id}.json`, {
      method: "PUT",
      body: JSON.stringify(updateComment),
      headers: {
        "Content-type": "application/json"
      }
    }).then(response => response.json())
    .then(comment => {
      this.setState({
        updated: true
      });
    });
  }

  render() {
    //
    if (this.state.updated === true) {
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
            <input type="submit" value="Update" />
          </p>
        </form>
      </div>
    );
  }
}

export default UpdateComment;