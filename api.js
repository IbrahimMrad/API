/*const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)*/


const express = require("express");
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3030;
app.use(cors());

// your code
app.get('/', function (req, res) {
    res.send('Hello World')
  });

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});