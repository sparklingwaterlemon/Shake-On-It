// * Root --- 3000/
var express = require('express');
var router = express.Router();

// Controllers
const EditCtrl = require('../2controller/edit-controller');

// POST --- http://localhost:3000/user/123/edit
router.post("/user/:id/edit", EditCtrl.updateGame);

// POST --- DELETE http://localhost:3000/user/123/delete
router.post("/user/:id/delete", EditCtrl.deleteGame);


module.exports = router;