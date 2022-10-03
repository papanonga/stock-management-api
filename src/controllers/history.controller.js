const historyService = require('../services/history.service')

exports.getAllTransaction = async (req, res) => {
    try {
        const result = await historyService.getAll()
        if (result) {
            return res.status(200).json(result)
        }
        return res.status(404).json({ status: "Not found" })
    } catch (error) {
        console.error(error)
        return res.status(500).json({ status: "error" })
    }
}