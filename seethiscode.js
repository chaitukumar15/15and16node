var express = require("express");
var app = express();
var cors = require("cors");

app.use(cors());
// app.use(express.json());
app.use((req, res, next) => {
  var body = "";
  req.on("data", (chunk) => {
    body += chunk; // Concatenate the chunk to the body
  });

  // When all data has been received
  req.on("end", () => {
    console.log("Request body:", body);
    req.body = body;
    next()
  });
 
});

app.post("/bodyy", (req, res) => {
    console.log("Form Data:", req.body);
    res.send(req.body);
  });

app.use(express.urlencoded({ extended: false }));

app.get("/products", async (req, res) => {
  var data = await fetch("https://dummyjson.com/products");

  var response = await data.json();

  res.status(200).send(response.products);
});





app.listen(3001, () => {
  console.log("Server has been connected");
});
