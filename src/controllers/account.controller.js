const accountService = require('../services/account.service')


exports.register = async (req, res) => {
    try {
        const result = await accountService.register(req.body)
        if (result) {
            return res.status(201).json({ status: "Already registered" })
        }
        return res.status(400).json({ status: "Existing Account" })

    } catch (error) {
        console.error(error)
        return res.status(500).json({ status: "error" })
    }
}


exports.login = async (req, res) => {
    try {
        const account = req.body
        const token = await accountService.login(account)
        if (token) {
            return res.status(200).json({ token })
        }
        return res.status(401).json({ status: "Unauthorized" })

    } catch (error) {
        console.error(error)
        return res.status(500).json({ status: "error" })
    }
}