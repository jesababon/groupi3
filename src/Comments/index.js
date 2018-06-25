import React, { Component} from "react";
import "./style.css";
import CreateComment from "../CreateComment";
import UpdateComment from "../UpdateComment";
import DeleteComment from "../DeleteComment";

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
        return (
        <div className="showComments">
        <p>ID {comment.id} {comment.content}
        <UpdateComment 
        id={comment.id}
        content={comment.content}
        />
        <DeleteComment
        id={comment.id}
        content={comment.content}
        />
        </p>
        </div>
        );
      })}
      </div>
    );
  }
}

export default Comments;
