
var express= require("express");

var app=express();


// app.use(express.json())

app.use((req,res,next)=>{


   req.k="puspha-2"

    console.log("hi this is chauitanya");
    res.ch="hi this is chauitanya";
    next()

})


app.post("/data",(req,res)=>{

console.log(req.body);

console.log(res.ch,"kk");

console.log(req.k,"fire");



res.send(req.body)

})

app.get("/product",(req,res)=>{

    console.log(res.ch,"hh");

    console.log(req.k,"wildfire");
    
    
    res.send("hello ")
})

var port =3003;

app.listen(port,()=>{

console.log("server has been started ");


})