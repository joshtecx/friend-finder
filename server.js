const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = 3000;

app.listen(PORT, function(){
    console.log("App listening on PORT " + PORT);
});