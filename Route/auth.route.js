const express = require ("express");
const { signup, signin,  google, signout} = require("../Controller/auth.controller");
// const { google } = require("../Controller/oauth.controller");
const {concertdata,getConcert,getConcertOne,createBooking, addConcert,postConcertTickets,getConcertTickets,getSeatsByEventId} = require("../Controller/concert.controller")

const router = express.Router();

router.post("/signup",signup)
router.post("/signin",signin)
router.post("/google",google)
router.get('/signout', signout);
router.post("/addc" ,concertdata);
// router.post("/addmany" ,addConcert);
router.get("/getart", getConcert);
router.get("/getartone/:id", getConcertOne);
router.post('/bookings', createBooking);
// router.post('/consertTickPost', postConcertTickets);
// router.get("/consertTickGet",getConcertTickets);
// router.get('/getSeats/:eventId', getSeatsByEventId);

module.exports = router;
