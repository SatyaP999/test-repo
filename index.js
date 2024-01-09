const bodyParser = require("body-parser");
const express = require("express");

const app = express()
const port = 3000

app.use(bodyParser.json());

app.post('/', function(req, res) {
    console.log(req.body)
  res.send({
    msg : "2+2=4"
  })
})

app.listen(port, function() {
  console.log(`Example app listening on port ${port}`)
})