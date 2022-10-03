exports.notfound = async (req, res) => {
    try {
        return res.status(404).json({ status: "404 Not found your path" })
    } catch (error) {
        console.error(error)
        return res.status(500).json({ status: "error" })
    }
}