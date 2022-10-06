const mongoose = require("mongoose")
const { Schema } = mongoose

const BusSchema = mongoose.Schema({
    bus_name: {
        type: String
    },
    bus_no: {
        type: String
    },
    bus_status: {
        type: String
    },
    bus_seats: {
        type: String
    },
    bus_type: {
        type: Array
    },
    capacity: {
        type: Number
    },
    starting_point: {
        type: String
    },
    destination: {
        type: String
    },
    boarding_points: {
        type: Array
    },
    departure_time: {
        type: Date
    },
    estimate_destination_time: {
        type: Date
    },
    amenities: {
        type: Array
    },
    user_id: {
        type: Schema.ObjectId,
        ref: 'User'
    },
    driver_name: {
        type: String
    },
    driver_contact_no: {
        type: String
    },
    driver_address: {
        type: String
    }
}, {
    timestamps: true,
    versionKey: false
})

const busModel = mongoose.model("Bus", BusSchema)

module.exports = {busModel}