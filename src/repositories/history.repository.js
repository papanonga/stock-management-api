const historyDatabase = require('../db/models')


// historyDatabase.history.hasOne(
//     historyDatabase.equipments,
//     {
//         foreignKey: { name: 'serial_number', field: 'serial_number' },
//     }
// );
// historyDatabase.equipments.belongsTo(historyDatabase.history, { foreignKey: 'serial_number' });


// historyDatabase.equipments.hasMany(historyDatabase.history, {
//     foreignKey: { name: 'serial_number', field: 'serial_number' }
// })
// historyDatabase.history.belongsTo(historyDatabase.equipments, { foreignKey: 'serial_number' })




historyDatabase.history.hasOne(historyDatabase.equipments,
    {
        foreignKey: { name: 'serial_number', field: 'serial_number'}
    }
)

historyDatabase.equipments.belongsTo(historyDatabase.history, { foreignKey: 'serial_number'})

// include: {
//     model : historyDatabase.equipments
// }


// exports.getAllTransaction = async () => await historyDatabase.history.findAll({
//     include: {
//         model: historyDatabase.equipments
//     }
    
// })


exports.getAllTransaction = async () => await historyDatabase.history.findAll()

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