const busService = require("../services/busService")

const addBus = (req, res) => {
    const busData = req.body
    busService.addBus(busData).then(result => {
        if (result) {
            res.json({
                success: 1,
                message: "Bus Confirmed",
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

const getAllBus = (req, res) => {
    busService.getAllBus.then(result => {
        if (result) {
            res.json({
                success: 1,
                message: "All Bus Data Recived",
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

const getBusByFilter = (req, res) => {
    const { filterType, filterValue } = req.query;
    busService.getBusByFilter(filterType, filterValue).then(result => {
        if (result) {
            res.json({
                success: 1,
                message: "Bus Data Recived",
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

const updateBusById = (req, res) => {
    const body = req.body;
    const bus_id = req.params.bus_id;
    busService.updateBusById(bus_id, body).then(result => {
        if (result) {
            res.json({
                success: 1,
                message: "Bus Data Updated",
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

const deleteBusById = (req, res) => {
    const bus_id = req.params.bus_id;
    busService.deleteBusById(bus_id).then(result => {
        if (result) {
            res.json({
                success: 1,
                message: "Bus Deleted",
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

module.exports = { addBus, getAllBus, getBusByFilter, updateBusById, deleteBusById }