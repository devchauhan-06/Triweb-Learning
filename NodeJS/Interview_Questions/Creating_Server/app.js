const http = require('http')

const server = http.createServer((req, res) => {
    res.writeHead(200, { contentType: 'text \ plain' })
    res.end("Server is running");
});

server.listen(3000)