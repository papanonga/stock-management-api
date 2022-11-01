const historyRepository = require('../repositories/history.repository')

exports.writeHistory = async (data) => await historyRepository.writeHistory(data) 

exports.getByProjectName = async project_name => await historyRepository.getByProject(project_name)

exports.getByEquipmentSerialNumber = async serial_number => await historyRepository.getBySerialNumber(serial_number)

exports.getAll = async () => await historyRepository.getAllTransaction()

exports.delete = async (serial_number) => await historyRepository.delete(serial_number)