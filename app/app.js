const express = require("express");
const app = express();
const helloWorldHandler = require("./hello/helloWorldHandler");

app.use(express.json());

const routers = [
  {
    prefix: "/",
    target: helloWorldHandler,
  },
];

for (let router of routers) {
  app.use(router.prefix, router.target);
}

module.exports = app;
