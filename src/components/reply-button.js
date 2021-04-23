import React from "react";

export default class LikeButton extends React.Component {
  render() {
    //Below is JSX
    return <button className="btn btn-primary">Reply</button>;
    //React Way of Writing this
    // return React.createElement("button", { class: "btn btn-primary" }, "Reply");
  }
}
