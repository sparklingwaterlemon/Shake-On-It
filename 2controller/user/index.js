const UserDB = require("../../3models/1-User-DB");
const GameBank = require("../../3models/3-GameBank-DB");


// Landing Page
function index(req, res){
    const SelectUser = req.user;
    
    GameBank.find({$or:[{player1gamerTag: SelectUser.gamerTag},{player2gamerTag: SelectUser.gamerTag }]}, function(err, userGames){
        res.render("user/index", {
            userGames,
            SelectUser,
            title: "Index",
        })
    })
};



  


// Profile Page
function profile(req, res){
    const SelectUser = req.user
    UserDB.findById({_id: SelectUser._id})
    .populate("gamerTag")
    
    res.render("user/profile", {
        SelectUser,
    })
};
// Profile Page - Update Gamer Tag
function updateGamerTag(req, res){
    const SelectUser = req.user;
    UserDB.findByIdAndUpdate(SelectUser._id, {gamerTag: req.body.gamerTag}, 
        function(err, updatedUser){
            if (err){
                console.log(err)
            } else {
                res.redirect("/user/profile")
            }
        }
    )
}




// New Game Page
function newGame(req, res){
    const SelectUser = req.user;
    res.render("user/create", {
        SelectUser,
    })
};
// New Game Page - POST - Create Game
function createGame(req, res){
    const SelectUser = req.user;
    
    const game = new GameBank(req.body);
    console.log(req.body);

    game.save(function(err){
        if (err){
            res.redirect("/")
        }
    });
    res.redirect('/user');
    console.log(game);
};



module.exports = {
    index,
    profile,
    updateGamerTag,
    newGame,
    createGame,
}
