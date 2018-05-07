// ===================================================
// LOAD DATA
// ===================================================

const friendData = require("../data/friends.js");

module.exports = function(app) {
    app.get("/api/survey", function(request, response) {
        response.json(friendData);
    });
}