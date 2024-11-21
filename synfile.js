var http = require("http");
var url = require("url");
var fs = require("fs");

var server = http.createServer((req, res) => {
  var parsedurl = url.parse(req.url, true);

  console.log(parsedurl);

  if (parsedurl.pathname == "/products") {
fs

    fs.readFile("indx.html", "utf-8", (err,data) => {
      if (err) {
        res.write(JSON.stringify(err.message));
      } else {
        res.write(data);
        
      }
      res.end();
    });
  } else {
    res.write("file not found");
    res.end();
  }
});

var port = 3006;

server.listen(port, () => {
  console.log("server started " + "http://localhost:" + port);
});
