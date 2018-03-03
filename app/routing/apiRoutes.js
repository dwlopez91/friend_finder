var friendsData = require("../data/friends");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friendsData);
      });

    app.post("/api/friends", function(req, res) {
        var matchName = "";
        var matchPhoto = "";
        var matchFriendScore = "";

        console.log(req.body);

        var userData = req.body;
        var userScore = usderData.scores;

        console.log(userScore);
        
    
    });

}
