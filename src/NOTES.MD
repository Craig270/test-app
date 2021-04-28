import React from "react"
import ReactDOM from "react-dom"

ReactDOM.render(WHAT DO I WANT TO RENDER, WHERE DO I WANT TO RENDER IT)document.getElementById("root")

rafce - maps out a function for component building

impt = imports prop types

import React from "react";

export default class Counter extends React.Component {
constructor(props) {
super(props);
this.state = {
count: 0,
};
}

render() {
return (
<button
className="btn btn-primary"
onclick={() => this.setState((state) => ({ count: state.count + 1 }))} >
Counter {this.state.count}
</button>
);
}
}

///index.js would look something like below:

import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));
//App would then look something like:
