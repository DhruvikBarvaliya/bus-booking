const mongosse = require('mongoose')

const BookingSchema = mongosse.Schema({

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
        type: ObjectId,
        ref: 'User'
    },
    no_of_seat_book: {
        type: Number
    },
    date_of_booking: {
        type: Date
    },
    bus_id: {
        type: ObjectId,
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

const bookingModel = mongosse.model("Booking", BookingSchema)

module.exports = bookingModel

