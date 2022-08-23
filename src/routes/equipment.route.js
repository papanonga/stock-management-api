const express = require('express')
const router = express.Router()

const equipmentsController = require('../controllers/equipment.controller')

router.get('/', equipmentsController.findAll)
router.get('/:id', equipmentsController.findByEquipmentID)
router.post('/', equipmentsController.addEquipment)
router.put('/:id', equipmentsController.editEquipment)
router.delete('/:id', equipmentsController.deleteEquipment)
router.get('/sn/:id', equipmentsController.findBySerialNumber)
module.exports = router;