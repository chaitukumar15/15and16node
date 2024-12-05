var express=require("express");

var fs=require("fs");

var app=express();

app.get("/product",(req,res)=>{



    fs.readFile("./index1.json","utf-8",(err,data)=>{


        if(err){

            res.status(400)
            res.send({
                status:400,
                message:err.message
            })
        }else{
            res.send({
                status:200,
                data:JSON.parse(data)
            })
        }



    })

  

})





var port = 3005

app.listen(port,()=>{
console.log("hi started the server");

})