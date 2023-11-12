import express from "express";
import fs from "fs";
import path from "path";

import React from "react";
import { renderToString } from "react-dom/server";
import { matchRoutes } from "react-router-dom";
import { StaticRouter } from "react-router-dom/server";
import App from "../client/app";
import routes from "../client/routes";
import store from "../client/store";

const server = express();

server.set("view engine", "ejs");

server.set("views", path.join(__dirname, "views"));

server.use("/", express.static(path.join(__dirname, "static")));

const manifest = fs.readFileSync(
  path.join(__dirname, "static/manifest.json"),
  "utf-8"
);

const assets = JSON.parse(manifest);

server.get("*", async (req, res) => {
  const matchedRoutes = matchRoutes(routes, req.path);
  const promises = matchedRoutes?.map((item) => {
    // @ts-ignore
    if (item.route?.element.type?.getInitialData) {
      // @ts-ignore
      return item.route?.element.type?.getInitialData(store);
    }
  });

  // @ts-ignore
  Promise.allSettled(promises).then((results) => {
    const components = renderToString(
      <StaticRouter location={req.url}>
        <App />
      </StaticRouter>
    );

    res.render("client", { assets, components, store });
  });
});

server.listen(3000, () => {
  console.log(`Server running on http://localhost:3000`);
});
