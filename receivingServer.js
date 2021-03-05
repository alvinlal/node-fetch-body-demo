const http = require("http");

const server = http.createServer((req, res) => {
  let data = [];
  req.on("data", chunk => {
    data.push(chunk);
  });
  req.on("end", () => {
    console.log(JSON.parse(data));
  });
});

server.listen(4000);
