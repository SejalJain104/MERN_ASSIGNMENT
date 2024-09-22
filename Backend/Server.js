//Load the http module to create an HTTP server
const http = require('http');

//Create an HTTP server
const myServer = http.createServer((req,res) => {
     //Set the response HTTP header with HTTP status and Content type
     res.writeHead(200,{'Content-Type':'text/plane'});

     //send the response body for root URL
     if(req.url === '/'){
        res.end('Hello World!\n');
     }
     else{
        res.end('404 Not Found\n');
     }
});

myServer.listen(3000,() => {
   console.log("Listening on Port 3000")
})

