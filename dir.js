var http = require("http");

var fs = require("fs");

var server = http.createServer((req, res) => {
  var exs = fs.existsSync("index10.html");

  console.log(exs);

  fs.copyFile("index2.html", "index3.html", (err) => {
    if (err) {
      res.write(JSON.stringify(err.message));
      res.end();
    } else {
      fs.readFile("index2.html", "utf-8", (err, data) => {
        if (err) {
          res.write(JSON.stringify(err.message));
          res.end();
        } else {
          res.write(data);
          res.end();
        }
      });
    }
  });
});

var port = 3000;

server.listen(port, () => {
  console.log("hi server has been started ");
});
