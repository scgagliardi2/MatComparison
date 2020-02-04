import React, { Component } from "react";
import "./MatTable.css";

class MatTable extends Component {
  state = {};
  render() {
    return (
      <div className="matTable">
        <table>
          <tr>
            <th>Material Name</th>
            <th>Vendor</th>
            <th>Datasheet</th>
            <th>Chemical Description</th>
            <th>Material Type</th>
            <th>Cost/Quotes</th>
            <th>Color</th>
            <th>Date updated</th>
            <th>Comments</th>
            <th>Young's Modulus</th>
            <th>Yield Strength</th>
            <th>Tensile Strength</th>
            <th>Shear Modulus</th>
            <th>Shear Strength</th>
            <th>Flexural Modulus</th>
            <th>Flexural Strength</th>
            <th>Compressive Strength</th>
            <th>Compressive Modulus</th>
            <th>Rockwell Hardness</th>
            <th>Vickers Hardness</th>
            <th>Hardness (GPa)</th>
            <th>Knoop Hardness</th>
            <th>Poisson's Ratio</th>
            <th>Density</th>
            <th>Coefficient of Thermal Expansion</th>
          </tr>
          <tr>
            <td>Jill</td>
            <td>Smith</td>
            <td>50</td>
          </tr>
          <tr>
            <td>Eve</td>
            <td>Jackson</td>
            <td>94</td>
          </tr>
        </table>
      </div>
    );
  }
}

export default MatTable;
