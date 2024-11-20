var http = require("http");
var url = require("url");
var fs = require("fs");

var server = http.createServer((req, res) => {
  var parsedurl = url.parse(req.url, true);

  console.log(parsedurl);

  if (parsedurl.pathname == "/products") {
    // 1.extentions,filename ,conetxt, encoded ,calllbacl
    var g="chaiotanya";

    fs.writeFile("index.txt","g", "utf-8", (err) => {
      if (err) {
        res.write(JSON.stringify(err.message));
      } else {
        res.write("file has been successfully created");
        console.log("hello priniting");
      }
      res.end();
    });
  } else {
    res.write("file not found");
    res.end();
  }
});

var port = 3002;

server.listen(port, () => {
  console.log("server started " + "http://localhost:" + port);
});
