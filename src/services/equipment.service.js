const equipmentsRepository = require('../repositories/equipment.repository')
const historyService = require('./history.service')

function getBangkokTime(date = new Date()) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate(), parseInt(date.getHours()) + 7, date.getMinutes())
}


exports.findAll = async () => await equipmentsRepository.findAllEquipment()

exports.findByID = async id => await equipmentsRepository.findByID(id)

exports.addEquipment = async equipment => {
    const alreadyAdd = await equipmentsRepository.addEquipment(equipment)
    if (alreadyAdd) {
        const { project_name, serial_number, borrower } = alreadyAdd.dataValues
        const dateNow = new Date()
        await historyService.writeHistory({
            project_name,
            serial_number,
            borrower: borrower ? borrower : "-",
            borrow_date: borrower ? getBangkokTime() : "-",
            back_to_store_date: getBangkokTime(),
            status_equipment_back: "stock"

        })
        console.log("already add result => ", alreadyAdd?.dataValues)
        return alreadyAdd
    }
}

exports.editEquipment = async (id, equipment) => {
    const isEquipmentInStock = await equipmentsRepository.findByID(id)
    console.log("Equipment service => ", equipment)
    if (isEquipmentInStock) {
        const result = await equipmentsRepository.updateEquipmentDetail(id, equipment)
        // const updatedEquipment = await equipmentsRepository.findByID(id)
        // const { project_name, serial_number, borrower, status } = updatedEquipment.dataValues
        // await historyService.writeHistory({
        //     project_name,
        //     serial_number,
        //     borrower: borrower ? borrower : "-",
        //     borrower_date: borrower ? getBangkokTime() : "-",
        //     back_to_store_date: getBangkokTime(),
        //     status_equipment_back: status
        // })
        return result
    }
    return


}

exports.deleteEquipment = async id => {
    const isEquipmentInStock = await equipmentsRepository.findByID(id)
    const { serial_number } = isEquipmentInStock.dataValues
    if (isEquipmentInStock) {
        await historyService.delete(serial_number)
        return await equipmentsRepository.deleteEquipment(id) 
    }
    return
}



exports.findBySerialNumber = async sn => await equipmentsRepository.findBySerialNumber(sn)


exports.moveEquipment = async (id, equipment) => {
    const isEquipmentInStock = await equipmentsRepository.findByID(id)
    if (isEquipmentInStock) {
        const result = await equipmentsRepository.updateEquipmentDetail(id, equipment)
        const updatedEquipment = await equipmentsRepository.findByID(id)
        const { project_name, serial_number, borrower, status } = updatedEquipment.dataValues
        await historyService.writeHistory({
            project_name,
            serial_number,
            borrower: borrower ? borrower : "-",
            borrower_date: borrower ? getBangkokTime() : "-",
            back_to_store_date: getBangkokTime(),
            status_equipment_back: status
        })
        return result
    }
    return


}