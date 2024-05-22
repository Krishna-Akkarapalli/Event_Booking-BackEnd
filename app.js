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

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

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

// app.use((err, req, res, next) => {
//   const statusCode = err.statusCode || 500;
//   const message = err.message || 'Internal Server Error';
//   return res.status(statusCode).json({
//     success: false,
//     message,
//     statusCode,
//   });
// });

module.exports = app;
