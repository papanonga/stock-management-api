const equipmentService = require('../services/equipment.service')


exports.findAll = async (req, res) => {
    try {
        const result = await equipmentService.findAll()
        if (result) {
            return res.status(200).json(result)
        }
        return res.status(404).json({ status: "Not found" })
    } catch (error) {
        console.error(error)
        return res.status(500).json({ status: "error" })
    }
}

exports.findByEquipmentID = async (req, res) => {
    try {
        const result = await equipmentService.findByID(req.params.id)
        if (result) {
            return res.status(200).json(result)
        }
        return res.status(404).json({ status: "Not found" })

    } catch (error) {
        console.error(error)
        return res.status(500).json({ status: "error" })
    }
}


exports.addEquipment = async (req, res) => {
    try {
        const result = await equipmentService.addEquipment(req.body)
        if (result) {
            return res.status(200).json(result)
        }
        return res.status(404).json({ status: "Not found" })
    } catch (error) {
        console.error(error)
        return res.status(500).json({ status: "error" })
    }
}

exports.editEquipment = async (req, res) => {
    try {
        const result = await equipmentService.editEquipment(req.params.id, req.body)
        if (result) {
            return res.status(201).json(result)
        }
        return res.status(404).json({ status: "Not found" })
    } catch (error) {
        console.error(error)
        return res.status(500).json({ status: "error" })
    }
}

exports.deleteEquipment = async (req, res) => {
    try {
        const result = await equipmentService.deleteEquipment(req.params.id)
        if (result) {
            return res.status(200).json({ status: "deleted" })
        }
        return res.status(404).json({ status: "Not found" })
    } catch (error) {
        console.error(error)
        return res.status(500).json({ status: "error" })
    }
}

exports.findBySerialNumber = async (req, res) => {
    try {
        const result = await equipmentService.findBySerialNumber(req.params.id)
        if (result) {
            return res.status(200).json(result)
        }
        return res.status(404).json({ status: "Not found" })
    } catch (error) {
        console.error(error)
        return res.status(500).json({ status: "error" })
    }
}