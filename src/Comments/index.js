import React, { Component } from "react";
import "./style.css";
import CreateComment from "../CreateComment";
// const Comment = require('../models/Comment');


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
      <CreateComment />
      {this.state.comments.map(comment => {
        console.log(comment);
        let comments = [comment]
        return (
        <div className="showComments">
        <h3>{comment.content}</h3>
        
        </div>
        );
      })}
      </div>
    );
  }
}

export default Comments;
