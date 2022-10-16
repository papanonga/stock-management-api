const historyDatabase = require('../db/models')

exports.getAllTransaction = async () => await historyDatabase.history.findAll()


exports.getBySerialNumber = async equipment_sn => await historyDatabase.history.findAll({
    where : {
        equipment_sn
    }
})


exports.getByProject = async project_name => await historyDatabase.history.findAll({
    where : {
        project_name
    }
})


exports.writehistory = async data => await historyDatabase.history.create(data)