import React from "react";
import "./AddButton.css";

class AddButton extends React.Component {
  constructor() {
    super()
    this.addQuery = this.addQuery.bind(this)
  }
  
  state = { numOfClicks: 0 };

  addQuery() {
    this.setState.numOfClicks += 1;
  }

  render() {
    return (
      <div class="addButton" onClick={this.addQuery}>
        +
      </div>
    );
  }
}

export default AddButton;
