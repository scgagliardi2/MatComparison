import React from "react";
import "./ResultsDisplay.css";
import MatTable from "./MatTable";

class ResultsDisplay extends React.Component {
  state = {};
  render() {
    return (
      <div className="backgroundDisplay">
        <MatTable></MatTable>
      </div>
    );
  }
}

export default ResultsDisplay;
