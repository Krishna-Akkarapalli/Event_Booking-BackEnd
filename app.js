const userRoutes = require('./Route/user.route');
const authRoutes = require('./Route/auth.route');
const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");
const dotenv = require('dotenv');
const path = require('path');
const concertrouter = require('./Route/concert.route');
// const concertdata = require("./Route/concert.route")

dotenv.config();
const app = express();

app.use(cors({
  origin:["http://localhost:4000","http://localhost:5173"],
  methods:["GET","PUT","PATCH","POST","DELETE","HEAD","UPDATE"],
  credentials:true,
}))

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.log(err);
  });



// app.use(express.static(path.join(__dirname, '/Event/src')));

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'Event', 'src', 'index.html'));
// });

app.use(express.json());
app.use(cookieParser());

app.listen(4000, () => {
  console.log('Server listening on port 4000');
});

app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);
// app.use("api/concert",concertrouter);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  return res.status(statusCode).json({
    success: false,
    message,
    statusCode,
  });
});

module.exports = app;













// // Assuming you have already defined and exported the Event model
// const express = require('express');
// const app = express();
// const Event = require('./Models/Concert'); // Path to your Event model file
// const PORT = process.env.PORT || 3000;
// const userRoutes = require('./Route/user.route');
// const authRoutes = require('./Route/auth.route');
// const cors = require('cors');
// const mongoose = require("mongoose");
// const bodyParser = require('body-parser');
// const bcrypt = require("bcrypt");
// const cookieParser = require("cookie-parser");
// const dotenv = require('dotenv');
// const path = require('path');
// const concertrouter = require('./Route/concert.route');

// dotenv.config();

// // Set the view engine to EJS
// app.set('view engine', 'ejs');

// // Connect to MongoDB
// mongoose.connect(process.env.MONGO)
//   .then(() => {
//     console.log('Connected to MongoDB');
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// // Middleware
// app.use(cors({
//   origin:["http://localhost:4000","http://localhost:5173"],
//   methods:["GET","PUT","PATCH","POST","DELETE","HEAD","UPDATE"],
//   credentials:true,
// }));
// app.use(express.json());
// app.use(cookieParser());

// // Route to fetch movie events and render them
// app.get('/movie-tickets', async (req, res) => {
//     try {
//         // Fetch movie events from the database
//         const movieEvents = await Event.find({ showType: 'movie' }).exec();

//         // Render the 'movie-tickets.ejs' template with the fetched data
//         res.render('movie-tickets', { movieEvents });
//     } catch (err) {
//         console.error(err);
//         res.status(500).send('Internal Server Error');
//     }
// });

// // Mount routes
// app.use('/api/user', userRoutes);
// app.use('/api/auth', authRoutes);
// // app.use("api/concert",concertrouter);

// // Error handling middleware
// app.use((err, req, res, next) => {
//   const statusCode = err.statusCode || 500;
//   const message = err.message || 'Internal Server Error';
//   return res.status(statusCode).json({
//     success: false,
//     message,
//     statusCode,
//   });
// });

// // Start the server
// app.listen(4000, () => {
//     console.log('Server listening on port 4000');
// });

// module.exports = app;













