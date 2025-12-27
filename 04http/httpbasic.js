const http = require("http");

const server = http.createServer((req, res) => {
  console.log("Incoming Request");
  //db operations

  res.writeHead(200);
  res.end("Thanks for using this server");
});

server.listen(5000, () => {
  console.log("Server is listening to port 5000");
});
