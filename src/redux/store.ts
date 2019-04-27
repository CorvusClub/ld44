import { createStore, applyMiddleware } from "redux";
import { reducer } from "./reducer";
import "regenerator-runtime/runtime";
import createSagaMiddleware from "redux-saga";
import { saga } from "./saga";
import { composeWithDevTools } from "redux-devtools-extension";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(reducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(saga);
