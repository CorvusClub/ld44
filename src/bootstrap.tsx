import React from "react";
import ReactDOM from "react-dom";
import { App } from "./components/App";
import { hot } from "react-hot-loader";

const HmrContainer = hot(module)(App);
export function bootstrap() {
  const container = document.getElementById("react_app");

  ReactDOM.render(<HmrContainer />, container);
}
