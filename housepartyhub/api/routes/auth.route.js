const express = require("express");
const router = express.Router();
const userSignUp = require("./../controllers/auth.controller");
const { checkAuthData } = require("./../utils/checkAuthData");

router.route("/signup").post(checkAuthData, userSignUp.signup);
router.route("/signin").post(checkAuthData, userSignUp.signin);

module.exports = router;
