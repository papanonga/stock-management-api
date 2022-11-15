const express = require('express')
const router = express.Router()

const borrowersController = require('../controllers/borrowers.controller')

router.get('/', borrowersController.getAllBorrowers)
router.post('/', borrowersController.addBorrower)
router.put('/:id', borrowersController.edit)
router.delete('/:id', borrowersController.delete)



module.exports = router