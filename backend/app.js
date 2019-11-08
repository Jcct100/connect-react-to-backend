const express = require("express");
var request = require("request");
const app = express();
const port = 5000;

app.get("/", (req, res) => res.send("Hello World!"));
app.get("/endpoint", (req, res) => res.send("This is my new endpoint!"));

app.get("/getWeatherToronto", (req, res) => {
  request("https://jsonplaceholder.typicode.com/todos/1", function(
    error,
    response,
    body
  ) {
    if (!error && response.statusCode == 200) {
      var parsedBody = JSON.parse(body);
      var title = parsedBody["title"];
      res.send(title);
    }
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
