import express from "express";
import fs from "fs";
import path from "path";

import React from "react";
import { renderToString } from "react-dom/server";
import { matchRoutes } from "react-router-dom";
import { StaticRouter } from "react-router-dom/server";
import App from "../client/app";
import routes from "../client/routes";
import { initializeStore } from "../client/store";

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

  const store = initializeStore();
  // https://github.com/htdangkhoa/react-ssr-starter/blob/main/src/server/render/index.js#L56
  const promises = matchedRoutes?.map((item) => {
    if (item.route?.Component?.getInitialProps) {
      return item.route?.Component?.getInitialProps(store);
    }
  });

  promises &&
    Promise.all(promises).then(() => {
      const components = renderToString(
        <StaticRouter location={req.url}>
          <App initialZustandState={store.getState()} />
        </StaticRouter>
      );

      res.render("client", { assets, components, store: store.getState() });
    });
});

server.listen(3000, () => {
  console.log(`Server running on http://localhost:3000`);
});
