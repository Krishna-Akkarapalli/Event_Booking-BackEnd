const mongoose = require("mongoose")
const seatSchema = require('./SeatsModel');

const concertsSchema = new mongoose.Schema({
  concertName: {
      type: String,
      required: true
  },
  showType: {
      type: String,
      required: true
  },
  location: {
      type: String,
      required: true
  },
  price: {
      type: Number,
      required: true
  },
  artistName: {
      type: String,
      required: true
  },
  artistImage: {
      type: String,
      required: true
  },
  artistBgImage: {
      type: String,
      required: true
  },
  venue: {
      type: String,
      required: true
  },
  duration: {
      type: Number,
      required: true
  },
  concertTime: {
      type: String,
      required: true
  },
  concertDate: {
      type: Date,
      required: true
  },
  showLanguage: {
      type: String,
      required: true
  },
  seats: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Seat'
  }],
  createdAt: {
      type: Date,
      default: Date.now
  }
}, { timestamps: true });

// Initialize seats for the concert
concertsSchema.pre('save', function (next) {
  if (this.isNew) {
      // Create an array of 46 seats
      const seats = Array.from({ length: 46 }, (_, index) => ({
          row: 'A',  // Assuming all seats are in row 'A', you can modify this as needed
          number: index + 1,
          isAvailable: true
      }));
      this.seats = seats;
  }
  next();
});

// const Event = mongoose.model('Event', eventSchema);

const Event = mongoose.model("Event",concertsSchema)

module.exports = Event;








// const mongoose = require('mongoose');
// const seatSchema = require('./SeatsModel');

// const concertsSchema = new mongoose.Schema({
//     concertName: {
//         type: String,
//         required: true
//     },
//     showType: {
//         type: String,
//         required: true
//     },
//     location: {
//         type: String,
//         required: true
//     },
//     price: {
//         type: Number,
//         required: true
//     },
//     artistName: {
//         type: String,
//         required: true
//     },
//     artistImage: {
//         type: String,
//         required: true
//     },
//     artistBgImage: {
//         type: String,
//         required: true
//     },
//     venue: {
//         type: String,
//         required: true
//     },
//     duration: {
//         type: Number,
//         required: true
//     },
//     concertTime: {
//         type: String,
//         required: true
//     },
//     concertDate: {
//         type: Date,
//         required: true
//     },
//     showLanguage: {
//         type: String,
//         required: true
//     },
//     seats: [seatSchema],
//     createdAt: {
//         type: Date,
//         default: Date.now
//     }
// }, { timestamps: true });

// // Initialize seats for the concert
// concertsSchema.pre('save', function (next) {
//     if (this.isNew) {
//         // Create an array of 46 seats
//         const seats = Array.from({ length: 46 }, (_, index) => ({
//             row: 'A',  // Assuming all seats are in row 'A', you can modify this as needed
//             number: index + 1,
//             isAvailable: true
//         }));
//         this.seats = seats;
//     }
//     next();
// });

// const Concert = mongoose.model('Concert', concertsSchema);

// module.exports = Concert
