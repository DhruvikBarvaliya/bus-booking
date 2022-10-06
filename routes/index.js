const express = require("express")
const router = express.Router()
const bookingRoute = require("./bookingRoute")
const busRoute = require("./busRoute")
const userRoute = require("./userRoute")

router.use("/api",
    bookingRoute,
    busRoute,
    userRoute
)

module.exports = router 