import React from "react";
import ReactDOM from "react-dom";
import { App } from "./components/App";
import { hot } from "react-hot-loader";
import { store } from "./redux/store";
import { actionCreators } from "./redux/actions";

const HmrContainer = hot(module)(App);
export function bootstrap() {
  const container = document.getElementById("react_app");

  ReactDOM.render(<HmrContainer />, container);

  store.dispatch(actionCreators.proceedInStory());
}
