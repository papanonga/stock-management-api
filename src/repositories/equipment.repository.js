const db = require('../db/models')


exports.findAllEquipment = async () => await db.Equipments.findAll({
    order: [
        ['id', 'DESC']
    ]
})

exports.findByID = async id => await db.Equipments.findByPk(id)

exports.addEquipment = async equipment => await db.Equipments.create(equipment)

exports.updateEquipmentDetail = async (id, equipment) => await db.Equipments.update(equipment, {
    where: {
        id
    }
})

exports.deleteEquipment = async id => await db.Equipments.destroy({
    where: {
        id
    }
})


exports.findBySerialNumber = async sn => await db.Equipments.findAll({
    where: {
        serial_number: sn
    }
})




