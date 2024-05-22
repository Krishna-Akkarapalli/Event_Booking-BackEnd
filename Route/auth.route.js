const express = require ("express");
const { signup, signin,  google, signout} = require("../Controller/auth.controller");
// const { google } = require("../Controller/oauth.controller");
const {concertdata} = require("../Controller/concert.controller")

const router = express.Router();

router.post("/signup",signup)
router.post("/signin",signin)
router.post("/google",google)
router.get('/signout', signout);
router.post("/addc" ,concertdata)

module.exports = router;