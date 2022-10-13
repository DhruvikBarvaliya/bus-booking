const userService = require("../services/userService")

const addUser = (req, res) => {

    try {
        const userData = req.body
        let result = userService.addUser(userData)
        res.json({
            success: 1,
            message: "User Confirmed",
            data: result
        })

    } catch (error) {
        res.json({
            success: 0,
            message: "Fail to Insert",
            error
        })
    }

}

const getAllUser = (req, res) => {
    userService.getAllUser.then(result => {
        if (result) {
            res.json({
                success: 1,
                message: "All User Data Recived",
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

const getUserByFilter = (req, res) => {
    const { filterType, filterValue } = req.query;
    userService.getUserByFilter(filterType, filterValue).then(result => {
        if (result) {
            res.json({
                success: 1,
                message: "User Data Recived",
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

const updateUserById = (req, res) => {
    const body = req.body;
    const user_id = req.params.user_id;
    userService.updateUserById(user_id, body).then(result => {
        if (result) {
            res.json({
                success: 1,
                message: "User Data Updated",
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

const deleteUserById = (req, res) => {
    const user_id = req.params.user_id;
    userService.deleteUserById(user_id).then(result => {
        if (result) {
            res.json({
                success: 1,
                message: "User Deleted",
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

module.exports = { addUser, getAllUser, getUserByFilter, updateUserById, deleteUserById }