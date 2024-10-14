import http from "http";
const PORT = process.env.PORT;

const server = http.createServer((req, res) => {
  // create a router
  try {
    // check if GET request
    if (req.method === "GET") {
      if (req.url === "/") {
        // res.writeHead(500, { "Content-Type": "application/json" });
        res.writeHead(500, { "Content-Type": "text/html" });
        res.end(`<h1> Hello </h1>`);
      } else if (req.url === "/about") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(`<h1> About </h1>`);
      } else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end(`<h1> Not found </h1>`);
      }
    } else {
      throw new Error(`Method not allowed`);
    }
  } catch (error) {
    res.writeHead(500, { "Content-Type": "text/plain" });
    res.end(`<h1> Server error </h1>`);
  }

  //   res.setHeader("Content-Type", "text/html");

  // request
  //   console.log(req.url);
  //   console.log(req.method);

  // change status
  //   res.statusCode = 404;

  //   res.write("Hello World");
});

server.listen(PORT, () => {
  console.log(`Server runing on port ${PORT}`);
});
