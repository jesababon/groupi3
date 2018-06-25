import React, { Component } from "react";
import "./style.css";

class UpdateComment extends Component{
    constructor(props) {
      super(props)    
      this.state = {
        content: "",
        updated: false
      }

    this.onFormChange = this.onFormChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    // componentDidMount() {
    //   let id = this.props.match.params.id;
    //   // let num = url.replace(/update-comment/i, '')
    //   // let id = num.replace(/\//g, '')
    //   console.log(id);
    //   fetch(`/comment/${id}.json`)
    //     .then(response => response.json())
    //     .then(comment => {
    //       console.log(comment);
    //       this.setState({
    //         id: comment.id,
    //         content: comment.content
    //       });
    //     });
    // }

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
      id: this.props.id,
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
    if (this.state.updated === true) {
      return window.location.reload();
    }
    return (      
      <div className="UpdateComment">
        <form onChange={this.onFormChange} onSubmit={this.onFormSubmit}>
            <label htmlFor="content">
            <p>Update?</p>
            </label>
            <input
              type="text"
              name="content"
              placeholder = {this.props.content}
              value={this.state.content}
            />
          <p>
            <input type="submit" value="Update" />
          </p>
        </form>
      </div>
    );
  }
}

export default UpdateComment;