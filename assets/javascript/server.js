// Javascript for the Firebase Server

const express = require('express');

const app = express();

app.use(express.static("./"));

app.get('/', (req, res) => {
  res.sendFile("./index.html");
});

const PORT = process.env.PORT || 3001;
app.listen(PORT);