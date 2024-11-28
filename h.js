var http = require("http");

var fs = require("fs");

var server = http.createServer((req, res) => {

    fs.rm("raju",{recursive:true},(err)=>{

        if(err){
            res.write(JSON.stringify(err.message))
        res.end();
            }else{
                res.write("file deleted")
                res.end();  
            }
    })
});

var port = 3000;

server.listen(port, () => {
  console.log("hi server has been started ");
});
