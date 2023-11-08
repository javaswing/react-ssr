import ReactDOM from "react-dom/client";
import App from "./app";
import React from "react";
import { BrowserRouter } from "react-router-dom";

// in server render mode, you must be use hydrateRoot method
// ReactDOM.createRoot(document.getElementById("root"), <App />);
ReactDOM.hydrateRoot(
  document.getElementById("root") as HTMLElement,
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
