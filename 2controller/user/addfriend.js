const UserDB = require("../../3models/1-User-DB");
const GameBank = require("../../3models/3-GameBank-DB");

// Add Friend Page
function index(req, res) {
    let SelectUser = req.user

    UserDB.find({}, function (err, AllUsers) {
        res.render("user/addfriend", {
            AllUsers,
            SelectUser,
        })
    })
};



// From Search Bar - Add Friend
function searchFriend(req, res) {
    let SelectUser = req.user;
    let searchTag = req.body.search; // bringing in the Gamer Tag you are searching for


    // for line 67
    // will use indexOf method on SelectUser. friend's list
    // indexOf array will return -1 if it can't find the Searching Gamer Tag in Friend List

    // just array.indexOf might return [0] if it's the first index of array
    let searchTagIndex = 1;

    // only when it's not found ( -1 ) will searchTagIndex be 0
    if(SelectUser.friendTag.indexOf(searchTag) === -1){
        searchTagIndex = 0;
    };
   
       

    UserDB.findOne({ gamerTag: searchTag }, function (err, foundUser) {
        if(err){
            console.log(err)
            return res.render("/")
        }
        // if searching gamer tag is NOT your own gamer tag AND if it's not already in your friend's array
        if(searchTag !== SelectUser.gamerTag && searchTagIndex == false){
            // SelectUser.friendId.push(foundUser._id); // adding friends's id to user's {friend's id: array}
            SelectUser.friendTag.push(searchTag); // adding friends gamer tag to user's {friend tag: array}

            SelectUser.save(function (err) {
                res.redirect("/user/addfriend")
            })
        } else {
            res.render("user/adderror")
        }
    })
};
        










// From Scroll Bar - Add Friend
function scrollFriend(req, res) {
    let SelectUser = req.user;
    let scrollTag = req.body.scroll;

    // same from Search Bar
    let scrollTagIndex = 1;
    if(SelectUser.friendTag.indexOf(scrollTag) === -1){
        scrollTagIndex = 0;
    };


    UserDB.findOne({ gamerTag: scrollTag }, function (err, foundUser) {
        if(err){
            console.log(err)
            return res.render("/")
        }
        if(scrollTag !== SelectUser.gamerTag && scrollTagIndex == false){
            SelectUser.friendId.push(foundUser._id);
            SelectUser.friendTag.push(scrollTag);

            SelectUser.save(function (err) {
                res.redirect("/user/addfriend")
            })
        } else {
            res.render("user/adderror")
        }
    })
};




module.exports = {
    index,
    searchFriend,
    scrollFriend,
}