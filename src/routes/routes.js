const express = require('express')
const router = express.Router()


router.use('/equipments', require('./equipment.route'))
router.use('/account', require('./account.route'))

module.exports = router;