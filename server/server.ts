import express from "express";
import path from "path";
import fs from "fs";

import { renderToString } from "react-dom/server";
import App from "../client/components/app";
import React from "react";

const server = express();

server.set("view engine", "ejs");

server.set("views", path.join(__dirname, "views"));

server.use("/", express.static(path.join(__dirname, "static")));

const manifest = fs.readFileSync(
  path.join(__dirname, "static/manifest.json"),
  "utf-8"
);

const assets = JSON.parse(manifest);

server.get("/", (req, res) => {
  const components = renderToString(React.createElement(App));

  res.render("client", { assets, components });
});

server.listen(3000, () => {
  console.log(`Server running on http://localhost:3000`);
});
