import React from "react";
import "./InputsDisplay.css";
import Query from "./Query";
import AddButton from "./AddButton";

class InputsDisplay extends React.Component {
  state = {};
  render() {
    return (
      <div className="inputDisplay">
        <Query></Query>
        <Query></Query>
        <AddButton></AddButton>
      </div>
    );
  }
}

export default InputsDisplay;
