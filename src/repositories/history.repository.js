const historyDatabase = require('../db/models')

exports.getAllTransaction = async () => await historyDatabase.Histories.findAll()


exports.getBySerialNumber = async equipment_sn => await historyDatabase.Histories.findAll({
    where : {
        equipment_sn
    }
})


exports.getByProject = async project_name => await historyDatabase.Histories.findAll({
    where : {
        project_name
    }
})


exports.writeHistory = async data => await historyDatabase.History.create(data)