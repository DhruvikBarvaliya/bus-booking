const dotenv = require("dotenv")
dotenv.config()
const mongoose = require("mongoose")
const { userModel } = require("../models/userModel");
const { hashPassword } = require("../utils/validations")

const connectDB = () => {
    mongoose.connect(process.env.MONGO_URI || "mongodb://localhost:27017/BusBooking")
        .then(() => {
            console.log("Database Connected SuccessFully")
            userModel.findOne({ role: "SUPAR_ADMIN", email: "dhruvik.barvaliya.blackwolve@gmail.com" }, function (err, data) {
                if (!data) {
                    userModel.create({
                        role: "SUPAR_ADMIN",
                        first_name: "Dhruvik",
                        last_name: "Barvaliya",
                        username: "Dhruvik94",
                        email: "dhruvik.barvaliya.blackwolve@gmail.com",
                        password: hashPassword("Dhruvik7@"),
                        age: 30,
                        gender: "Male",
                        address: "Surat",
                        contact_no: "9876543210",
                        is_confirmed: true,
                        is_active: true,
                    }, (e, suparAdminData) => {
                        console.log(`Supar Admin User Created Successfully with Email "dhruvik.barvaliya.blackwolve@gmail.com" And id is :- ${suparAdminData._id}`);
                    })
                }
            });
        })
        .catch((err) => console.error("Could not connect to MongoDB...", err));
}

module.exports = { connectDB } 