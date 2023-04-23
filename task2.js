var http = require("http")

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.write('<h1>Hello Node!!!!</h1>\n');
    console.log("Program Ended")
    res.end()
}).listen(3000)