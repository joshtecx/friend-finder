// ===================================================
// LOAD DATA
// ===================================================

const friendData = require("../data/friends.js");

// ===================================================
// Routing
// ===================================================

module.exports = function(app) {
    app.get("/api/friends", function(request, response) {
        response.json(friendData);
    });

    app.post("/api/friends", function(request, response){
        
    });
};