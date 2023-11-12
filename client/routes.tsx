import { RouteObject } from "react-router-dom";
import Home from "./components/home";
import List from "./components/list";
import React from "react";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/list",
    element: <List />,
  },
];

export default routes;
