const mongoose = require('mongoose')
const { Schema } = mongoose

const BookingSchema = mongoose.Schema({

    fare_amount: {
        type: Number
    },
    total_amount: {
        type: Number
    },
    booking_status: {
        type: String
    },
    user_id: {
        type: Schema.ObjectId,
        ref: 'User'
    },
    no_of_seat_book: {
        type: Number
    },
    date_of_booking: {
        type: Date
    },
    bus_id: {
        type: Schema.ObjectId,
        ref: 'Bus'
    },
    departure_time: {
        type: Date
    },
    boarding_point: {
        type: String
    },
    destination: {
        type: String
    },
}, {
    timestamps: true,
    versionKey: false
})

const bookingModel = mongoose.model("Booking", BookingSchema)

module.exports = {bookingModel}

