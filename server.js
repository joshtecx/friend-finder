// ===================================================
// DEPENDENCIES
// ===================================================
const express = require("express");
const bodyParser = require("body-parser");
// ===================================================
// EXPRESS CONFIGURATION
// ===================================================

// lets node know that we are creating an express server
const app = express();

// sets the port
const PORT = 8080;

// handles data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require("./app/routing/htmlRoutes.js")(app);
require("./app/routing/apiRoutes.js")(app);

// ===================================================
// LISTENER
// ===================================================
app.listen(PORT, function(){
    console.log("App listening on PORT " + PORT);
});