const http = require('http');
const server = http.createServer((req, res) => {
 res.writeHead(200, { 'Content-Type': 'text/plain' });
 res.end('Hello, Word Node.js App!\n');
});
const port = 3000;
server.listen(port, () => {
 console.log(`Server running at http://localhost:${port}`);
});
