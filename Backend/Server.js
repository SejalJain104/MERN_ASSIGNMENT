const http = require("http");

const myServer = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plane" });

  if (req.url === "/") {
    res.end("Hello World!\n");
  } else {
    res.end("404 Not Found\n");
  }
});

myServer.listen(3000, () => {
  console.log("Listening on Port 3000");
});
