var express = require("express");

var app = express();

app.use(express.json());

app.get("/", function (request, response) {
  console.log(request.body); // your JSON

  response.send("hello"); // echo the result back
});

app.listen(8001);
