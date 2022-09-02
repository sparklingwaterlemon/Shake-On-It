// * Root --- 3000/user
var express = require('express');
var router = express.Router();

// Controllers
const UserCtrl = require('../../2controller/user/index');
const UserFriendCtrl = require('../../2controller/user/addfriend');
const EditCtrl = require('../../2controller/edit-controller');


// User Landing Page
// GET --- 3000/user
router.get("/", UserCtrl.index);


// Profile Page
// GET --- 3000/user/profile
router.get("/profile", UserCtrl.profile);
// POST --- 3000/user/profile/update
router.post("/profile", UserCtrl.updateGamerTag);

// Add Friend Page
// GET --- 3000/user/addfriend
router.get("/addfriend", UserFriendCtrl.index);
// POST --- 3000/user/addfriend/
router.post("/addfriend", UserFriendCtrl.searchFriend);
// POST --- 3000/user/addfriend/scroll
router.post("/addfriend/scroll", UserFriendCtrl.scrollFriend);


// New Game Page
// GET - 3000/user/create
router.get("/create", UserCtrl.newGame)
// POST - 3000/user/create/new"
router.post("/create/new", UserCtrl.createGame)



// Edit Show game
// GET --- http://localhost:3000/user/123
router.get("/:id", EditCtrl.show);




module.exports = router;
