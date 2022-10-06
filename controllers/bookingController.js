const bookingService = require("../services/bookingService")
const logger = require("../utils/Logging")

const addBooking = (req, res) => {
    const bookingData = req.body
    bookingService.addBooking(bookingData).then(result => {
        if (result) {
            res.json({
                success: 1,
                message: "Booking Confirmed",
                data: result
            })
        } else {
            res.json({
                success: 0,
                message: "Fail to Insert"
            })
        }
    })
}

const getAllBooking = (req, res) => {
    logger.info('getAllBooking route is accessed'),
        bookingService.getAllBooking.then(result => {
            if (result) {
                res.json({
                    success: 1,
                    message: "All Booking Data Recived",
                    data: result
                })
            } else {
                res.json({
                    success: 0,
                    message: "Fail to Recive"
                })
            }
        })
}

const getBookingByFilter = (req, res) => {
    const { filterType, filterValue } = req.query;
    bookingService.getBookingByFilter(filterType, filterValue).then(result => {
        if (result) {
            res.json({
                success: 1,
                message: "Booking Data Recived",
                data: result
            })
        } else {
            res.json({
                success: 0,
                message: "Fail to Recive",
            })
        }
    })
}

const updateBookingById = (req, res) => {
    const body = req.body;
    const booking_id = req.params.booking_id;
    bookingService.updateBookingById(booking_id, body).then(result => {
        if (result) {
            res.json({
                success: 1,
                message: "Booking Data Updated",
                data: result
            })
        } else {
            res.json({
                success: 0,
                message: "Fail to Update",
            })
        }
    })
}

const deleteBookingById = (req, res) => {
    const booking_id = req.params.booking_id;
    bookingService.deleteBookingById(booking_id).then(result => {
        if (result) {
            res.json({
                success: 1,
                message: "Booking Deleted",
                data: result
            })
        } else {
            res.json({
                success: 0,
                message: "Fail to Delete",
            })
        }
    })
}

module.exports = { addBooking, getAllBooking, getBookingByFilter, updateBookingById, deleteBookingById }