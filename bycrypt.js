

var express=require("express");

var bcrypt=require("bcrypt");

var fs=require("fs");

var app=express();


app.use(express.json())

app.get("/",(req,res)=>{


    res.send("hi this is home page ")



})


app.post("/product",async(req,res)=>{


    var salt =10;
    console.log("pass");
    
    var hashed_password=await bcrypt.hash(req.body.password,salt)

    console.log("hello");
    var dataa={
        username:req.body.username,
        password:hashed_password
    
    }

    fs.writeFile("./products123.json",JSON.stringify(dataa),"utf-8",(err)=>{

        if(err){
            res.status(400).send({

                satus:400,
                mesage:err.message,
            }
            
            )
            
        }else{
            res.status(200).send({

                satus:200,
                mesage:"suceessfully stored",
                data:dataa
            }
            
            )
        }


    })
    

// res.status(200)
   

})


app.post("/login",async(req,res)=>{

// 
// compare(user- sending passw,hashed pass)

    var userstoreddata=fs.readFileSync("./products123.json","utf-8");

    var j=JSON.parse(userstoreddata);
    var {password}=j;

    var userpass=req.body.password

    var match=await bcrypt.compare(userpass,password)

    res.send({
        match
    })

})



var port =3005
app.listen(port,()=>{


    console.log("server has been started");
    
})