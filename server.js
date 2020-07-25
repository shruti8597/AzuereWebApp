// const http = require('http');

// const server = http.createServer((request, response) => {
//     response.writeHead(200, {"Content-Type": "text/plain"});
//     response.end("Hello World!");
// });

// const port = process.env.PORT || 1337;
// server.listen(port);

// console.log("Server running at http://localhost:%d", port);

const express = require('express');
// const path = require('path');

const app = express();

// app.use(express.static(path.resolve(__dirname, 'dist')));

app.use((req, res) => {
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.end('Hello World!');
});

app.listen(5000, () => {
  console.log(`Server is listening on port: 5000`);
});
