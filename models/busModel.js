const mongoose = require("mongoose")

const BusSchema = mongoose.Schema({
    bus_name: {
        type: String
    }
}, {
    timestamps: true,
    versionKey: false
})

const busModel = mongoose.model("Bus", BusSchema)

module.exports = busModel