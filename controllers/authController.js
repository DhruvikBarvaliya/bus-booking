const authService = require("../services/authService")

const login = async (req, res) => {
    const userData = req.body
    authService.authenticate(userData).then(result => {
        if (result) {
            res.json({
                success: 1,
                message: "Login SuccessFully",
                data: result
            })
        } else {
            res.json({
                success: 0,
                message: "Fail To Login"
            })
        }
    })

}

const forgotPassword = (req, res) => {
    const userData = req.body
    authService.forgotPassword(userData).then(result => {
        if (result) {
            res.json({
                success: 1,
                message: "Forgot Password SuccessFully",
                data: result
            })
        } else {
            res.json({
                success: 0,
                message: "Fail To Forgot Password"
            })
        }
    }).catch(err => {
        res.json({
            success: 0,
            message: "Catch Fail To Forgot Password"
        })
    });
}

const resetPassword = (req, res) => {
    const userData = req.body
    authService.resetPassword(userData).then(result => {
        if (result) {
            res.json({
                success: 1,
                message: "Reset Password SuccessFully",
                data: result
            })
        }
        // else {
        //     res.json({
        //         success: 0,
        //         message: "Fail To Reset Password"
        //     })
        // }
    }).catch(err => {
        res.json({
            success: 0,
            message: "Fail To Reset Password"
        })
    });
}

const confirmEmail = (req, res) => {
    const userData = req.body
    authService.confirmEmail(userData, (err, result) => {
        if (err) {
            res.json({
                success: 0,
                message: "Fail To Confirm Email"
            })
        }
        res.json({
            success: 1,
            message: "Confirm Email SuccessFully",
            data: result
        })

    })
}
const logout = (req, res) => {
    const userData = req.body
    authService.confirmEmail(userData).then(result => {
        if (result) {
            res.json({
                success: 1,
                message: "Confirm Email SuccessFully",
                data: result
            })
        } else {
            res.json({
                success: 0,
                message: "Fail To Confirm Email"
            })
        }
    })
}

module.exports = { login, forgotPassword, resetPassword, confirmEmail, logout }