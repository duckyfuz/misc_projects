const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(200).json({ message: `Hello from the server!`, app: `Natours` }); // 200 Status is the default btw
});

app.post('/', (req, res) => {
  res.send('You have sent a post request');
});

const port = 3000;
app.listen(port, () => {
  console.log(`App running on ${port}`);
});
