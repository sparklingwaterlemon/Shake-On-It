const GameBank = require("../3models/3-GameBank-DB");

function index(req, res){
    GameBank.find({}, function(err, AllGames){
        res.render("index", {
        title: "userpage",
        AllGames
        })
    })
};


module.exports = {
    index,
}
