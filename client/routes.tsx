import { RouteObject } from "react-router-dom";
import { PageType } from "../types";
import Home from "./components/home";
import List from "./components/list";

type RouteObj = RouteObject & {
  Component?: PageType | null;
};

const routes: RouteObj[] = [
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/list",
    Component: List,
  },
];

export default routes;
