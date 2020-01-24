import React from "react";
import "./App.css";
import Logo from "./Cohu-Standard-Color-Logo-Transpaprent.png";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a href="https://www.cohu.com/" target="_blank">
          <img className="Header-logo" src={Logo} alt="image not found" />
        </a>
        <p className="Header-name">Cohu Materials Database</p>
      </header>
      <body></body>
    </div>
  );
}

export default App;
