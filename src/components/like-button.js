import React from "react";

export default class LikeButton extends React.Component {
  render() {
    // Below is JSX
    return <button className="btn btn-primary">Like</button>;
    // return React.createElement("button", { class: "btn btn-primary" }, "Like");
  }
}
