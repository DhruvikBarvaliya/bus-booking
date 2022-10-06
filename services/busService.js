const busModel = require("../models/busModel")

module.exports = {
    addBus: busData => {
        return busModel.create(busData);
    },
    getAllBus: () => {
        return busModel.find();
    },
    getBusByFilter: (filterType, filterValue) => {
        return busModel.findOne({ [filterType]: filterValue });
    },
    updateBusById: (bus_id, body) => {
        return busModel.updateOne({ bus_id: bus_id }, body);
        // return busModel.findOneAndUpdate(bus_id, body);
    },
    deleteBusById: bus_id => {
        return busModel.deleteOne({ bus_id: bus_id });
        // return busModel.findOneAndDelete(bus_id);
    }
};