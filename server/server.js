const express = require("express");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 2000;

const app = express();

app.use(express.static(__dirname +'/../client/dist/'));

//BodyParser Middleware
app.use(bodyParser.urlencoded({extended: true}));

// app.get()
// app.get("/", function(req, res) {
//   res.sendFile(__dirname + "/index.html");
// });


app.listen(PORT, function() {
  console.log(`App is listening on ${PORT}`);
});