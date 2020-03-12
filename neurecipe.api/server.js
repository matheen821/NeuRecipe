let express = require("express");
let cors = require("cors");
let bodyParser = require("body-parser");
let app = express();
app.use(cors());
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
let dbconfig = require("./db/config");
var port = process.env.PORT || 8080;

app.get("/", (req, res) => res.send("Hey, Your API Server is running..."));
app.use("/recipes", require("./src/recipes/routes"));
app.listen(port, function() {
  console.log("Your API Server running at " + port);
});
