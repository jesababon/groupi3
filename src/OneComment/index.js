import React, {
  Component
} from "react";
import "./style.css";
import Comments from '../Comments';

class OneComment extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: 0,
      content: ""
    }
  }

  componentDidMount() {
    let id = this.props.match.params.id
    // let num = url.replace(/comment/i, '') 
    // let id = num.replace(/\//g,'')     
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

  render() {
    return ( 
    <div className = "OneComment">
    <h3>Comment ID: {this.state.id}</h3>
    {this.state.content}
      </div>
    );
  };
}

export default OneComment;
