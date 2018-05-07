// ===================================================
// DEPENDENCIES
// ===================================================
const express = require("express");
const bodyParser = require("body-parser");
const path = require('path');
const htmlRoutes = require("./app/routing/htmlRoutes.js");
const apiRoutes = require("./app/routing/apiRoutes.js");

// ===================================================
// EXPRESS CONFIGURATION
// ===================================================

// lets node know that we are creating an express server
const app = express();

// sets the port
const PORT = 3000;

// handles data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(htmlRoutes);
app.use(apiRoutes);

// ===================================================
// LISTENER
// ===================================================
app.listen(PORT, function(){
    console.log("App listening on PORT " + PORT);
});