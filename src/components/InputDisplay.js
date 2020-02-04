import React from "react";
import "./InputsDisplay.css";
import Query from "./Query";

class InputsDisplay extends React.Component {
  state = {};
  render() {
    return (
      <div className="inputDisplay">
        <Query></Query>
        <Query></Query>
        <Query></Query>
        <Query></Query>
        <Query></Query>
        <Query></Query>
      </div>
    );
  }
}

export default InputsDisplay;
