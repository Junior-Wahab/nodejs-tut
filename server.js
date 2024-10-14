import http from "http";

const PORT = 8080;
const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");

  // change status
  res.statusCode = 404;

  res.writeHead(500, { "Content-Type": "application/json" });

  res.write("Hello World");
  res.end(`<h1> Hello </h1>`);
});

server.listen(PORT, () => {
  console.log(`Server runing on port ${PORT}`);
});
