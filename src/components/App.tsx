import React from "react";
import { Counter } from "./Counter";
import { Provider } from "react-redux";
import { store } from "@app/redux/store";
import { Dialogue } from "./Dialogue";

export const App = () => {
  return (
    <Provider store={store}>
      <Counter />
      <Dialogue />
    </Provider>
  );
};
