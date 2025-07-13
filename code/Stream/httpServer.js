const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  //   console.log(req);

  //   for (let key in req) {
  //     console.log(key);
  //   }

  //   const parsedUrl = url.parse(req.url, true);
  //   const path = parsedUrl.pathname;

  if (req.url === "/" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    let readStream = fs.createReadStream("./text.txt");

    readStream.pipe(res);
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Path not found in this forest 🌲");
  }
});

server.listen(4000, "localhost", () => {
  console.log(`server running on port 4000`);
});
