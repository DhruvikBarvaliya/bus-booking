const express = require("express")
const router = express.Router()
const { addUser, getAllUser, getUserByFilter, updateUserById, deleteUserById } = require("../controllers/userController")

router.post("/user", addUser)
router.get("/user", getAllUser)
router.get("/user/:filter", getUserByFilter)
router.put("/user/:id", updateUserById)
router.delete("/user/:id", deleteUserById)

module.exports = router 