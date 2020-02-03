import React from "react";
import "./App.css";
import Logo from "./Cohu-Standard-Color-Logo-Transpaprent.png";
import ResultsDisplay from "./ResultsDisplay";
import InputsDisplay from "./InputDisplay";

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
        <InputsDisplay>
        </InputsDisplay>
        <ResultsDisplay></ResultsDisplay>
      </body>
    </div>
  );
}

export default App;
