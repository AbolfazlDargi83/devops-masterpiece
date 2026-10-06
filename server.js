const http = require("http");
const os = require("os");

const port = 8080;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end(`Hello from Senior DevOps Project! Hostname: ${os.hostname()}\n`);
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
