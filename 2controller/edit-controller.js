const UserDB = require("../3models/1-User-DB");
const GameBank = require("../3models/3-GameBank-DB");


// Game Detail Show Page
function show(req, res){
    GameBank.findById(req.params.id, function(error, Game){
        res.render("user/gamedetail", {
            Game,
        })
        console.log(Game);
    })
};
    

// POST - Update Game
function updateGame(req, res){
    let editBody = req.body
    
    // found -- uses object.keys take editbody for each thru it's properties. If Object(key) == " empty value"  it will delete Object(key)
    Object.keys(editBody).forEach((k) => editBody[k] == '' && delete editBody[k]);

    const filter = {_id: req.params.id};
    const update = {
        "title": editBody.title,
        "description": editBody.description,
        "amount": editBody.amount,
        "penalty": editBody.penalty,
        "expiration": editBody.expiration,
    };


    GameBank.findByIdAndUpdate(filter, update, {new: true}, function(err, test){
        if (err){
            console.log(err)
        } else {
            res.redirect("/user")
        }
    })
};


function deleteGame(req, res){
    GameBank.findOneAndDelete({_id: req.params.id }, function (err, docs){
        if(err){
            console.log(err);
        }
    })
    res.redirect("/user")
};




    

module.exports = {
    show,
    updateGame,
    deleteGame,
}
