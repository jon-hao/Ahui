import React from "react";
import ReactDOM from "react-dom";
import "./style/index.css";
import Entry from "./components/Entry";
import { RunWork } from "./components/RunWork";

ReactDOM.render(
  <React.StrictMode>
    <RunWork />
  </React.StrictMode>,
  document.getElementById("root")
);
