const express = require('express')
const router = express.Router()


router.use('/equipments', require('./equipment.route'))

module.exports = router;