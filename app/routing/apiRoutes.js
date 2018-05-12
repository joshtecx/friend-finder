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
        const newFriend = request.body;
        let totalDifference;
        let lowestDifference;
        let newBestFriend;
        
        
        // console.log(newFriend);

        for(let i = 0; i < friendData.length; i++){
            // console.log(friendData[i].scores);
            totalDifference = 0;
            for(let j = 0; j < friendData[i].scores[j]; j++){
                // console.log(friendData[i].scores[j]);
                totalDifference += Math.abs(parseInt(newFriend.scores[j] - friendData[i].scores[j]));
                // console.log(totalDifference);
                
            }
        }

        lowestDifference = Math.min(totalDifference);
        console.log(lowestDifference);

        
        // friendData.push(newFriend);
        // response.json();
        
    });
};