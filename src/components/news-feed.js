import React from "react";
import Post from "./post";

let e = React.createElement;

export default class NewsFeed extends React.Component {
  render() {
    // let commentOne = {
    //   content: "This is my post",
    //   username: "Tommy",
    //   date: "12-12-2018",
    // };
    // let commentTwo = {
    //   content: "This is another post",
    //   username: "Tommy",
    //   date: "12-17-2018",
    // };
    // let commentThree = {
    //   content: "Here is a post from me wtf",
    //   username: "Tommy",
    //   date: "12-19-2018",
    // };

    return (
      <div className="container">
        <Post />
        <Post />
      </div>
    );
  }
}

