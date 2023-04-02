const express = require('express')
const app = express()
app.get('localhost:/3008', function (req, res) {
  res.send('Hello World!')
});
app.listen(3008, function () {
  console.log('Example app listening on port 3008!')
});