const express = require("express")
const router = express.Router()
const authRoute = require("./authRoute")
const bookingRoute = require("./bookingRoute")
const busRoute = require("./busRoute")
const userRoute = require("./userRoute")

router.use("/api",
    authRoute,
    bookingRoute,
    busRoute,
    userRoute
)

module.exports = router 