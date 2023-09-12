const fs = require("fs");
const http = require("http");
const url = require("url");

const slugify = require("slugify");

////////////////////////////////////////////////////////////////////
// FILES
// // Blocking, synchronous way
// const txt = fs.readFileSync("./txt/input.txt", "utf-8");
// console.log(txt);
// const textOut = `This is what we know about the avocado: ${txt}. \nCreated on ${Date.now()}`;
// fs.writeFileSync("./txt/output.txt", textOut);
// console.log("File was written");

// // Non-blocking, async way
// fs.readFile("./txt/start.txt", "utf-8", (err, data) => {
//   console.log(data);
// });

////////////////////////////////////////////////////////////////////
// SERVER
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf8");
const dataObj = JSON.parse(data);

const server = http.createServer((req, res) => {
  const { query, pathname } = url.parse(req.url, true);
  console.log(query, pathname);

  const pathName = req.url;
  if (pathName === "/" || pathName === "/overview") {
    res.end("Hello from the server!");
  } else if (pathName === "/api") {
    // console.log(prodData);
    res.writeHead(200, { "Content-type": "application/json" });
    res.end(data);
  } else {
    res.writeHead(404, {
      "Content-Type": "text/html",
      "my-own-header": "hello-world",
    });
    res.end("<h1>Page not found!</h1>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Hello from port 8000");
});
