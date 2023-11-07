import ReactDOM from "react-dom/client";
import App from "./components/app";
import React from "react";
// @ts-ignore
// in server render mode, you must be use hydrateRoot method
// ReactDOM.createRoot(document.getElementById("root"), <App />);
ReactDOM.hydrateRoot(document.getElementById("root"), <App />);
