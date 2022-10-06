const userModel = require("../models/userModel")

module.exports = {
    addUser: userData => {
        return userModel.create(userData);
    },
    getAllUser: () => {
        return userModel.find();
    },
    getUserByFilter: (filterType, filterValue) => {
        return userModel.findOne({ [filterType]: filterValue });
    },
    updateUserById: (user_id, body) => {
        return userModel.updateOne({ user_id: user_id }, body);
        // return userModel.findOneAndUpdate(user_id, body);
    },
    deleteUserById: user_id => {
        return userModel.deleteOne({ user_id: user_id });
        // return userModel.findOneAndDelete(user_id);
    }
};