const http = require('http');
const fs = require('fs');


const server = http.createServer((req, res) => {

    const data = fs.readFileSync(`${__dirname}/UserAPI/userapi.json`, 'utf-8');
    const objData = JSON.parse(data);



    if (req.url === "/") {
        res.end('Hello From the home side');
    }
    else if (req.url === "/about") {
        res.end('Hello From the AboutUs side');
    }
    else if (req.url === "/contact") {
        res.end('Hello From the ContactUs side');
    }
    else if (req.url === "/userapi") {
        // fs.readFile(`${__dirname}/UserAPI/userapi.json`, 'utf-8', (err, data) => {
        //     if (err) throw err;
        //     console.log(data);
        //     const objData = JSON.parse(data);
        //     // console.log(objData[0].name);
        //     // res.end(data);


        //     res.end(objData[0].name);
        //})

        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(objData[2].name);

    }
    else {
        res.writeHead(404, { "Content-type": "text/html" });
        res.end("<h1>404 error page.Page doesn't exist</h1>");
    }
})


server.listen(8000, "127.0.0.1", () => {
    console.log("listening to the port no 8000");
})
