const express = require("express")
const router = express.Router()
const { addBooking, getAllBooking, getBookingByFilter, updateBookingById, deleteBookingById } = require("../controllers/bookingController")

router.post("/booking", addBooking)
router.get("/booking", getAllBooking)
router.get("/booking/:filter", getBookingByFilter)
router.put("/booking/:id", updateBookingById)
router.delete("/booking/:id", deleteBookingById)

module.exports = router 