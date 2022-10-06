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
    age: {
        type: String
    },
    gender: {
        type: String
    },
    address: {
        type: String
    },
    user_id: {
        type: ObjectId,
        ref: 'User'
    },
    contact_no: {
        type: String
    },
    status: {
        type: String
    },
}, {
    timestamps: true,
    versionKey: false
})

const userModel = mongoose.model("User", UserSchema)

module.exports = userModel