import React, { Component } from "react";
import "./style.css";

class Comments extends Component {
constructor(props) {
  super(props)

  this.state = {
    comments: []
  }
}

componentDidMount() {
  fetch('/comments.json')
    .then(response => response.json())
    .then(comments => {
      this.setState({
        comments: comments
      });
    });
}


  render() {
    return (
      <div className="comments">
      {this.state.comments.map(comment => {
        let comments = [comment]
        return <h3>{comment.content}</h3>
      })}
      </div>
    );
  }
}

export default Comments;
