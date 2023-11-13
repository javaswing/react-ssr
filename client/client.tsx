import ReactDOM from "react-dom/client";
import App from "./app";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { initializeStore } from "./store";

// 注水
// @ts-ignore
const initialState = window.__INITIAL_STATE__;
// @ts-ignore
delete window.__INITIAL_STATE__;

const store = initializeStore(initialState);

// in server render mode, you must be use hydrateRoot method
// ReactDOM.createRoot(document.getElementById("root"), <App />);
ReactDOM.hydrateRoot(
  document.getElementById("root") as HTMLElement,
  <BrowserRouter>
    <App initialZustandState={store.getState()} />
  </BrowserRouter>
);
