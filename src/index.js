import React from "react";
import ReactDOM from "react-dom";
import FillGap from "./FillGap";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Fill the gaps</h1>
      <FillGap />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
