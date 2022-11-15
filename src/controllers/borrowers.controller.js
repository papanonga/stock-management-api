const borrowersService = require('../services/borrowers.service')

exports.addBorrower = async (req, res) => {
    try {
        const isAddBorrower = await borrowersService.add(req.body)
        if (isAddBorrower) {
            return res.status(200).json({ status: "Already Add" })
        }
        return res.status(404).json({ status: "Not found" })
    } catch (error) {
        console.error(error)
        return res.status(500).json({ status: "error" })
    }
}

exports.getAllBorrowers = async (req, res) => {
    try {
        const hasBorrower = await borrowersService.getAll()
        if (hasBorrower) {
            return res.status(200).json({result : hasBorrower})
        }
        return res.status(404).json({ status: "Not found" })
    } catch (error) {
        console.error(error)
        return res.status(500).json({ status: "error" })
    }
}

exports.edit = async (req, res) => {
    try {
        const result = await borrowersService.edit(req.params.id, req.body)
        if (result) {
            return res.status(200).json({ status: "Edit completed" })
        }
        return res.status(404).json({ status: "Not found" })
    } catch (error) {
        console.error(error)
        return res.status(500).json({ status: "error" })
    }
}

exports.delete = async (req, res) => {
    try {
        const result = await borrowersService.delete(req.params.id)
        if (result) {
            return res.status(200).json({ status: "delete successfully" })
        }
        return res.status(404).json({ status: "Not found" })
    } catch (error) {
        console.error(error)
        return res.status(500).json({ status: "error" })
    }
}



