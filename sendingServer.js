const http = require("http");
const fetch = require("node-fetch");

const obj = {
  firstname: "alvin",
  lastname: "lal",
  age: 20,
};

fetch("http://localhost:4000", {
  method: "POST",
  body: JSON.stringify(obj),
  headers: { "Content-Type": "application/json" },
}).then(res => res.json());
