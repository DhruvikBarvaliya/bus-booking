const express = require("express")
const router = express.Router()
const { addBus, getAllBus, getBusByFilter, updateBusById, deleteBusById } = require("../controllers/busController")

router.post("/bus", addBus)
router.get("/bus", getAllBus)
router.get("/bus/:filter", getBusByFilter)
router.put("/bus/:id", updateBusById)
router.delete("/bus/:id", deleteBusById)

module.exports = router 