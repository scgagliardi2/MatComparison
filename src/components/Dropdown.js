import React from "react";
import "./Dropdown.css";

class Dropdown extends React.Component {
  state = {};
  render() {
    return (
      <select class="dropdown">
        <option>Material Name</option>
        <option>Date updated</option>
        <option>Vendor</option>
        <option>Data Sheet</option>
      </select>
    );
  }
}

export default Dropdown;
