import React from "react";
import "./App.css";
import Logo from "./Cohu-Standard-Color-Logo-Transpaprent.png";

function addDropdown() {
  return (
    <select class="propDropdown">
      <option>Material Name</option>
      <option>Date updated</option>
      <option>Vendor</option>
      <option>Data Sheet</option>
    </select>
  );
}

function App() {
  return (
    <div class="App">
      <header class="App-header">
        <a
          href="https://www.cohu.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="Header-logo" src={Logo} alt="not found" />
        </a>
        <p class="Header-name">Cohu Materials Database</p>
      </header>
      <body>
        <div class="choices">
          <div>{addDropdown()}</div>
          <button class="addButton">+</button>
        </div>
        <div class="results"></div>
      </body>
    </div>
  );
}

export default App;
