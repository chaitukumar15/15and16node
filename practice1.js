// http to create server (req accept and res provide )

// server client apis diff type of apis ,

var http = require("http");

// creating server
// user -> req -> event emitter ,event listeners , event handlers
//   method , body , url -> params , queary , pathname

// {

//     "method":"post",

// }

var server = http.createServer((req, res) => {
  // string , buffer , cant pass array , object

  // feath - readable streams -> .json(),.toString();
  // chunks ->

  res.write("chaitanya  hello");

  res.end();

  // end the res
});

var port=3004;
server.listen(port,()=>{
console.log("server started");

})