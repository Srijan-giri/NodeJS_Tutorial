
// the http.createServer() method includes request and resposne parameters which is supplied by Node .js

// The request object can be used to get information about the current HTTP request
// such as: url, request header, and data.


// If the response from the HTTP server is supposed to be displayed as HTML,
// you should include an HTTP header with the correct content type:


const http = require('http');

//? create a server object:

const server = http.createServer((req, res) => {
    //console.log(req.url);  //^ prints out whatever comes after "localhost:

    //? Node.js Routing

    if (req.url === "/") {
        res.end('Hello From the home side');
    }
    else if (req.url === "/about") {
        res.end('Hello From the AboutUs side');
    }
    else if (req.url === "/contact") {
        // res.write('Hello From the ContactUs side');
        // res.end();
        res.end('Hello From the ContactUs side');
    }
    else {
        res.writeHead(404, { "Content-type": "text/html" });
        res.end("<h1>404 error page.Page doesn't exist</h1>");
    }


    //* res.end('Hello From the Other Sides Thapa');
})

server.listen(8000, "127.0.0.1", () => {
    console.log("listening to the port no 8000");
})


// const server = http.createServer((req, res) => {
//     res.end("Server Created");
// })

// server.listen("8000", "127.0.0.1", () => {
//     console.log("liste from port 8000");
// })