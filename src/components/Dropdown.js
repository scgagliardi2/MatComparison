import React from "react";
import "./Dropdown.css";

class Dropdown extends React.Component {
  state = {};
  render() {
    return (
      <select class="dropdown">
        <option>None</option>
        <option>Material Name</option>
        <option>Material Type</option>
        <option>Vendor</option>
        <option>Cost</option>
        <option>Coefficient of Thermal Expansion</option>
        <option>Young's Modulus</option>
        <option>Tensile Strength</option>
        <option>Flexural Strength</option>
        <option>Dielectric Constant</option>
        <option>Max Operating Temp</option>
      </select>
    );
  }
}

export default Dropdown;
