import React from "react";
import "./App.css";
import Logo from "./Cohu-Standard-Color-Logo-Transpaprent.png";
import ReactDOM from "react-dom";

function addDropdown() {
  return (
    <select className="propDropdown">
      <option>Material Name</option>
      <option>Date updated</option>
      <option>Vendor</option>
      <option>Data Sheet</option>
    </select>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a href="https://www.cohu.com/" target="_blank">
          <img className="Header-logo" src={Logo} alt="image not found" />
        </a>
        <p className="Header-name">Cohu Materials Database</p>
      </header>
      <body>
        <div className="choices">
          <div>{addDropdown()}</div>
          <button class="addButton">+</button>
        </div>
        <div className="results"></div>
      </body>
    </div>
  );
}

export default App;
