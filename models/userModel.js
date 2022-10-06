const mongoose = require("mongoose")

const UserSchema = mongoose.Schema({
    role: {
        type: String
    }
}, {
    timestamps: true,
    versionKey: false
})

const userModel = mongoose.model("User", UserSchema)

module.exports = userModel