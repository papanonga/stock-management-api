const db = require('../db/models')


exports.findAllEquipment = async () => await db.equipments.findAll({
    order: [
        ['id', 'ASC']
    ]
})

exports.findByID = async id => await db.equipments.findByPk(id)

exports.addEquipment = async equipment => await db.equipments.create(equipment)

exports.updateEquipmentDetail = async (id, equipment) => await db.equipments.update(equipment, {
    where: {
        id
    }
})

exports.deleteEquipment = async id => await db.equipments.destroy({
    where: {
        id
    }
})


exports.findBySerialNumber = async sn => await db.equipments.findAll({
    where: {
        serial_number: sn
    }
})




