import React from "react";
import { Provider } from "react-redux";
import { store } from "@app/redux/store";
import { Dialogue } from "./Dialogue";
import { MapSection } from "./MapSection";

export const App = () => {
  return (
    <Provider store={store}>
      <MapSection />
      <Dialogue />
    </Provider>
  );
};
