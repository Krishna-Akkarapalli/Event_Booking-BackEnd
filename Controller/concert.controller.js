const Event = require("../Models/Concert.js");
const Booking = require('../Models/BookingSeats.js');
const errorHandler = require("../Utils/error");

exports.concertdata = async (req, res, next)=>{

    // const {concertName,
    // showType,
    // location,
    // price  ,  
    // artistImage,
    // artistBgImage,
    // artistName,
    // venue,
    // duration,
    // concerTime,
    // concerDate,
    // showLanguage} = req.body;
    const concertData = req.body
    console.log()

    try {
        const existingConcert = await Event.findOne({ concertName: concertData.concertName });
        if (existingConcert) {
            return res.status(400).json({ error: 'A concert with this name already exists.' });
        }

        const newConcert = new Event(
            // concertName,
            // showType,
            // location,
            // price  ,  
            // artistImage,
            // artistName,
            // artistBgImage,
            // venue,
            // duration,
            // concerTime,
            // concerDate,
            // showLanguage
            concertData
        );
        await newConcert.save();
        res.status(201).json({messege:"success" , concertData});
    } catch (error) {
        if (error.code === 11000) {
            res.status(400).json({ error: 'Duplicate key error: A concert with this name already exists.' });
            console.log(error)
        } else {
            res.status(500).json({ error: 'Internal Server' });
            console.log(error)
        }
    }
}
   
exports.addConcert = async (req,res,next) => {
    const concertData= req.body
    try{
    const artData = await Event.insertMany(concertData);
    res.status(200).json({
        success :true,
        artData
    })
}
catch(error){
    if (error.code === 11000) {
        res.status(400).json({ error: 'Duplicate key error: A concert with this name already exists.' });
        console.log(error)
    } else {
        res.status(500).json({ error: 'Internal Server' });
        console.log(error)
    }
}

};


exports.getConcert = async (req,res,next) => {
    const artData = await Event.find();
    res.status(200).json({
        success :true,
        artData
    })

};

exports.getConcertOne = async (req,res,next) => {
    const {id} =  req.params
    const artData = await Event.findById(id);
    res.status(200).json({
        success :true,
        artData
    })

};

exports.createBooking = async (req, res) => {
    try {
      const { userName, email, selectedSeats, totalPrice } = req.body;
      const booking = new Booking({
        userName,
        email,
        selectedSeats,
        totalPrice
      });
      await booking.save();
      res.status(201).json({ success: true, message: 'Booking created successfully' });
    } catch (error) {
      console.error('Error creating booking:', error);
      res.status(500).json({ success: false, error: 'Failed to create booking' });
    }
  };




// router.get('/movie-tickets', async (req, res) => {
//   exports.getConcertTickets = async (req, res) => {
//     try {
//       const movieEvents = await Concert.find({ showType: 'movie' }).exec();
//       res.setHeader('Content-Type', 'application/json'); // Set header
//       res.json(movieEvents); // Send JSON response
//     } catch (err) {
//       console.error(err);
//       res.status(500).send('Internal Server Error');
//     }
//   };

//   router.post('/movie-tickets', async (req, res) => {
//   exports.postConcertTickets = async (req, res) => {
//     try {
//         const { eventId, seats } = req.body;
//         const event = await Concert.findById(eventId).exec();
//         if (!event) {
//             return res.status(404).send('Event not found');
//         }

//         seats.forEach((seatId) => {
//             const seat = event.seats.id(seatId);
//             if (seat && seat.isAvailable) {
//                 seat.isAvailable = false; // Mark seat as booked
//             }
//         });

//         await event.save(); // Save the updated event
//         res.status(200).send('Booking successful');
//     } catch (err) {
//         console.error(err);
//         res.status(500).send('Internal Server Error');
//     }
// };




//   exports.getSeatsByEventId = async (req, res) => {
//     try {
//         const eventId = req.params.eventId;
//         const event = await Concert.findById(eventId).exec();
//         if (!event) {
//             return res.status(404).send({ success: false, message: 'Event not found' });
//         }
//         res.json({ success: true, seats: event.seats });
//     } catch (err) {
//         console.error(err);
//         res.status(500).send({ success: false, message: 'Internal Server Error' });
//     }
// };