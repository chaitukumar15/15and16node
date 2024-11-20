var http = require("http");
var fs = require("fs");

var server = http.createServer(async (req, res) => {
  var data_pro = await fetch("https://fakestoreapi.com/products");

  var data = await data_pro.json();

  fs.writeFile("products.json",JSON.stringify(data) , "utf-8", (err) => {
    if (err) {
      res.write(JSON.stringify(err.message));
    } else {
      res.write("creadted successfully");
    }
    res.end();
  });
});

server.listen(3005, () => {
  console.log("server connected");
});
