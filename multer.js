var express = require("express");

var app = express();
var multer = require("multer");

app.use(express.urlencoded({extended:true}))
app.use(express.json())

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, __dirname + "/images");
  },
  filename: (req, file, cb) => {
    console.log(file);

    cb(null, Date.now() + file.originalname);
  },
});

var uplaod = multer({ storage: storage });

app.post("/register", uplaod.single("file"), (req, res) => {
  
console.log(req.body,"body");

    var obj={
        ...req.body,
        profilepic:req.file?.path
    }
  
    res.send({
        status:201,
        message:"hi successfully stored",
        userdata:obj
  });
});

var port = 3009;
app.listen(port, () => {
  console.log("server has been started ");
});
