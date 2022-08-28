const { DATE } = require('sequelize')
const equipmentsRepository = require('../repositories/equipment.repository')

const historyService = require('./history.service')

exports.findAll = async () => await equipmentsRepository.findAllEquipment()

exports.findByID = async id => await equipmentsRepository.findByID(id)

exports.addEquipment = async equipment => {
    const alreadyAdd = await equipmentsRepository.addEquipment(equipment)
    if (alreadyAdd) {
        const { project_name, serial_number, borrower, borrow_date } = await alreadyAdd.dataValues
        await historyService.writeHistory({
            project_name,
            equipment_sn: serial_number,
            borrower: borrower ? borrower : "-",
            borrow_date: borrow_date ? new Date(borrow_date) : "-",
            back_to_store_date: new Date(),
            status_equipment_back: "stock"

        })
        console.log("already add result => ", alreadyAdd?.dataValues)
        return alreadyAdd
    }
}

exports.editEquipment = async (id, equipment) => {
    const isEquipmentInStock = await equipmentsRepository.findByID(id)
    if (isEquipmentInStock) {
        const result = await equipmentsRepository.updateEquipmentDetail(id, equipment)
        const updatedEquipment = await equipmentsRepository.findByID(id)
        const { project_name, serial_number, borrower } = updatedEquipment.dataValues
        await historyService.writeHistory({
            project_name,
            equipment_sn: serial_number,
            borrower: borrower ? borrower : "-",
            borrower_date: new Date(),
            back_to_store_date: new Date(),
            status_equipment_back: "stock"
        })
        return result
    }
    return


}

exports.deleteEquipment = async id => {
    const isEquipmentInStock = await equipmentsRepository.findByID(id)
    if (isEquipmentInStock) {



        return await equipmentsRepository.deleteEquipment(id)
    }
    return
}



exports.findBySerialNumber = async sn => await equipmentsRepository.findBySerialNumber(sn)