const express = require("express");
const userController = require("../controllers/user.controller");
// using the express router api to create a router
const router = express.Router();

router.route("/test").get(userController.getUser);

module.exports = router;
