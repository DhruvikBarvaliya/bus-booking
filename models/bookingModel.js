const mongosse = require('mongoose')

const BookingSchema = mongosse.Schema({
    booking_status: {
        type: Boolean
    }
}, {
    timestamps: true,
    versionKey: false
})

const bookingModel = mongosse.model("Booking", BookingSchema)

module.exports = bookingModel

