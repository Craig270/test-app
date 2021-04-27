import React from "react";
import ReplyButton from "./reply-button";
import LikeButton from "./like-button";
import Comment from "./comment";

let e = React.createElement;

export default class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      content: props.content,
    };
  }

  render() {
    let comments = [];
    if (this.state.comments) {
      for (let comment of this.state.comments) {
        comment.push(<Comment {...comment} />);
      }
    }
    return (
      <div className="card w-75">
        <div className="card-header bg-primary text-white">
          Username and time
        </div>
        <div className="card-body">This is where our content goes</div>
        <div className="card-footer">
          <LikeButton />
          <ReplyButton />
          {comments}
        </div>
      </div>
    );
  }
}
