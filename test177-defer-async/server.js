const http = require("http");
const fs = require("fs");

const publicPath = ".";

const server = http.createServer((req, res) => {
  res.writeHead(200);
  if (req.url === "/favicon.ico") {
    return;
  }
  const file = fs.readFileSync(publicPath + req.url, "utf-8");
  const reg = /(\d+)\.js/;
  const isJs = reg.test(req.url);
  if (isJs) {
    req.url.replace(reg, ($0, $1) => {
      setTimeout(() => {
        res.end(file);
      }, 1000 * Math.random());
    });
  } else {
    res.end(file);
  }
});

server.listen(3000);
