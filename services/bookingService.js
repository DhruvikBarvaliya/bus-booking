const bookingModel = require("../models/bookingModel")

module.exports = {
    addBooking: bookingData => {
        return bookingModel.create(bookingData);
    },
    getAllBooking: () => {
        return bookingModel.find();
    },
    getBookingByFilter: (filterType, filterValue) => {
        return bookingModel.findOne({ [filterType]: filterValue });
    },
    updateBookingById: (booking_id, body) => {
        return bookingModel.updateOne({ booking_id: booking_id }, body);
        // return bookingModel.findOneAndUpdate(booking_id, body);
    },
    deleteBookingById: booking_id => {
        return bookingModel.deleteOne({ booking_id: booking_id });
        // return bookingModel.findOneAndDelete(booking_id);
    }
};