import React from "react";
import "./Query.css";
import Dropdown from "./Dropdown";
import QueryInput from "./QueryInput";

class Query extends React.Component {
  state = {};
  render() {
    return <div className="query"><Dropdown></Dropdown><QueryInput></QueryInput></div>;
  }
}

export default Query;
