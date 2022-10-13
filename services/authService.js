const userModel = require("../models/userModel")

module.exports = {
    authenticate: userData => {
        return userModel.findOne({ email: userData.email });
    },
    forgotPassword: () => {
        return userModel.find();
    },
    resetPassword: (filterType, filterValue) => {
        return userModel.findOne({ [filterType]: filterValue });
    },
    confirmEmail: (user_id, body) => {
        return userModel.updateOne({ user_id: user_id }, body);
    }
};