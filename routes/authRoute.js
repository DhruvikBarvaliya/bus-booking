const express = require("express")
const router = express.Router()
const { login, forgotPassword, resetPassword, confirmEmail, logout } = require("../controllers/authController")

router.post("/login", login)
router.get("/forgotPassword", forgotPassword)
router.put("/resetPassword", resetPassword)
router.delete("/confirmEmail", confirmEmail)
router.get("/logout", logout)

module.exports = router 