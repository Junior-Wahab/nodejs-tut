import http from "http";
import fs from "fs/promises";
import url from "url";
import path from "path";
const PORT = process.env.PORT;

// Get  current path
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(__filename, __dirname);

const server = http.createServer(async (req, res) => {
  // create a router
  try {
    // check if GET request
    if (req.method === "GET") {
      let filepath;
      if (req.url === "/") {
        // res.writeHead(500, { "Content-Type": "application/json" });
        // res.writeHead(500, { "Content-Type": "text/html" });
        // res.end(`<h1> Hello </h1>`);

        filepath = path.join(__dirname, "public", "index.html");
      } else if (req.url === "/about") {
        // res.writeHead(200, { "Content-Type": "text/html" });
        // res.end(`<h1> About </h1>`);

        filepath = path.join(__dirname, "public", "about.html");
      } else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end(`<h1> Not found </h1>`);
      }

      const data = await fs.readFile(filepath);
      res.setHeader("Content", "text/html");
      res.write(data);
      res.end();
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
