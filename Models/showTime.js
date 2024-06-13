const mongoose = require('mongoose');

const showtimeSchema = new mongoose.Schema({
    theater: { type: mongoose.Schema.Types.ObjectId, ref: 'Concert' },
    movie: { type: mongoose.Schema.Types.ObjectId, ref: 'Concert' },
    showtime: { type: Date, required: true },
    seats: [
        {
            row: { type: String, required: [true, 'Please add a seat row'] },
            number: { type: Number, required: [true, 'Please add a seat number'] },
            user: { type: mongoose.Schema.Types.ObjectId, ref: 'signup' }
        }
    ],
    isRelease: { type: Boolean, default: false }
}, { timestamps: true });

showtimeSchema.pre('deleteOne', { document: true, query: true }, async function (next) {
    const showtimeId = this._id;
    await this.model('signup').updateMany(
        { 'tickets.showtime': showtimeId },
        { $pull: { tickets: { showtime: showtimeId } } }
    );
    next();
});

module.exports = mongoose.model('Showtime', showtimeSchema);
