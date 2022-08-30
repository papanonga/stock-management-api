const express = require('express')
const router = express.Router()
const jwt = require('../configs/jwt')



router.use('/equipments', jwt.verifyToken, require('./equipment.route'))
router.use('/account', require('./account.route'))

module.exports = router;