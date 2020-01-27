import React from "react";
import "./App.css";
import Logo from "./Cohu-Standard-Color-Logo-Transpaprent.png";


function dropdown() {
  return (
    <select class="propDropdown">
      <option>Material Name</option>
      <option>Date updated</option>
      <option>Vendor</option>
      <option>Data Sheet</option>
    </select>
  );
}

function addDropdown() {
  document.getElementById("newDropdown").innerHtml = "Hi";
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a
          href="https://www.cohu.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="Header-logo" src={Logo} alt="not found" />
        </a>
        <p className="Header-name">Cohu Materials Database</p>
      </header>
      <body>
        <div className="choices">
          <div>{dropdown()}</div>
          <div id="newDropdown"></div>
          <button className="addButton" onClick={addDropdown}>
            +
          </button>
        </div>
        <div className="results"></div>
      </body>
    </div>
  );
}

export default App;
