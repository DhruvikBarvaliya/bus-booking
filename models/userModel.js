const mongoose = require("mongoose")

const UserSchema = mongoose.Schema({
    role: {
        type: String
    },
    first_name: {
        type: String
    },
    last_name: {
        type: String
    },
    username: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    age: {
        type: Number
    },
    gender: {
        type: String
    },
    address: {
        type: String
    },
    contact_no: {
        type: String
    },
    is_active: {
        type: Boolean
    },
    is_confirmed: {
        type: Boolean
    },
}, {
    timestamps: true,
    versionKey: false
})

const userModel = mongoose.model("User", UserSchema)

module.exports = {userModel}