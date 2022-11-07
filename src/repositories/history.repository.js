const historyDatabase = require('../db/models')
const sequelize = require('sequelize')

historyDatabase.history.hasOne(historyDatabase.equipments,
    {
        foreignKey: 'serial_number',
        sourceKey: 'serial_number'
    }
)
historyDatabase.equipments.belongsTo(historyDatabase.history,
    {
        foreignKey: 'serial_number',
        // targetKey: 'id'
    })



exports.getWithBorrowerAndEquipmentDetail = async () => await historyDatabase.history.findAll({})



exports.getAllTransaction = async () => await historyDatabase.history.findAll({
    include: [{
        model: historyDatabase.equipments,
        attributes: ['id', 'serial_number', 'item_name', 'category', 'brand', 'model'],
        required: false
    }],
    order: [sequelize.col('id', 'DESC')]
})


// exports.getAllTransaction = async () => await historyDatabase.history.findAll()

exports.getBySerialNumber = async serial_number => await historyDatabase.history.findAll({
    where: {
        serial_number
    }
})


exports.getByProject = async project_name => await historyDatabase.history.findAll({
    where: {
        project_name
    }
})


exports.writeHistory = async data => await historyDatabase.history.create(data)

exports.delete = async serial_number => await historyDatabase.history.destroy({
    where: {
        serial_number
    }
})