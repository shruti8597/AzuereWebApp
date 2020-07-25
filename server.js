const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.resolve(__dirname, 'dist')));

app.use((req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist/index.html'));
});

app.listen(5000, () => {
  console.log(`Server is listening on port: 5000`);
});
