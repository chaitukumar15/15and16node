var http = require("http");

var fs = require("fs");

var server = http.createServer((req, res) => {


  var d=fs.readdirSync("u");


  if(d.length>0){

  for( i of d){
    console.log(__filename);
    
    console.log(i);
    fs.unlinkSync("u/"+i)
  }

  fs.rmdir("u",(err)=>{

    if(err){
            res.write(JSON.stringify(err.message));
        res.end()
      }else{
        res.write("folder successfully deleted");
        res.end()
    }

  })

  }

  console.log(d);
  res.end("hi")
     
    // fs.rmdir("u",(err)=>{


    //   if(err){

    //     res.write(JSON.stringify(err.message));
    //     res.end()
    //   }else{
    //     res.write("folder successfully deleted");
    //     res.end()
    //   }


    // })
});

var port = 3000;

server.listen(port, () => {
  console.log("hi server has been started ");
});
