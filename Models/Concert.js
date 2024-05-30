const mongoose = require("mongoose")
const seatSchema = require('./seatSchema');

const concertsSchema = new mongoose.Schema({
    concertName: {
        type: String,
        required: true,
      },
      showType: {
        type: String,
        required: true,
      },
      location: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      artistName: {
        type: String,
        required: true,
      },
      artistImage: {
        type: String,
        required: true,
      },
      artistBgImage: {
        type: String,
        required: true,
      },
      venue: {
        type: String,
        required: true,
      },
      duration:{
        type:Number,
        required:true
      },
      concertTime:{
        type:String,
        required:true
      },
      concertDate:{
        type:Date,
        required:true
      },
      showLanguage:{
        type:String,
        required:true
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
      seats: [seatSchema]
},{timestamps:true});

// Initialize seats for the event
concertsSchema.pre('save', function (next) {
  if (this.isNew) {
    // Create an array of 46 seats
    const seats = Array.from({ length: 46 }, (_, index) => ({
      seatNumber: index + 1,
      isAvailable: true,
    }));
    this.seats = seats;
  }
  next();
});

// const Event = mongoose.model('Event', eventSchema);

const Event = mongoose.model("Event",concertsSchema)

module.exports = Event;