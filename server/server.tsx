import express from "express";
import fs from "fs";
import path from "path";

import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import App from "../client/app";

const server = express();

server.set("view engine", "ejs");

server.set("views", path.join(__dirname, "views"));

server.use("/", express.static(path.join(__dirname, "static")));

const manifest = fs.readFileSync(
  path.join(__dirname, "static/manifest.json"),
  "utf-8"
);

const assets = JSON.parse(manifest);

server.get("*", (req, res) => {
  const components = renderToString(
    <StaticRouter location={req.url}>
      <App />
    </StaticRouter>
  );

  res.render("client", { assets, components });
});

server.listen(3000, () => {
  console.log(`Server running on http://localhost:3000`);
});
