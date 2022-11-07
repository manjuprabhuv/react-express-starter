const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);

app.get('/hello', (req, res) => {
  res.send(JSON.stringify({ greeting: `hello from express` }));
});

app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
);
