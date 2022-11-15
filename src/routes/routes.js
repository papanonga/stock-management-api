const express = require('express')
const router = express.Router()
const jwt = require('../configs/jwt')
const cors = require('cors')


// router.use('*', require('./../controllers/pageNotFound.controller').notfound)
router.use('/equipments', jwt.verifyToken, require('./equipment.route'))
router.use('/history', jwt.verifyToken, require('./history.route'))
router.use('/account', require('./account.route'))
router.use('/borrower', jwt.verifyToken, require('./borrower.route'))

module.exports = router;