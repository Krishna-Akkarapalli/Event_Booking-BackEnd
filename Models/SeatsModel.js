const mongoose = require('mongoose');

const seatSchema = new mongoose.Schema({
    row: {
        type: String,
        required: true
    },
    number: {
        type: Number,
        required: true
    },
    isAvailable: {
        type: Boolean,
        default: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, { timestamps: true });

module.exports = seatSchema;
