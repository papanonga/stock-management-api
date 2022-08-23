const equipmentsRepository = require('../repositories/equipment.repository')


exports.findAll = async () => await equipmentsRepository.findAllEquipment()

exports.findByID = async id => await equipmentsRepository.findByID(id)

exports.addEquipment = async equipment => await equipmentsRepository.addEquipment(equipment)

exports.editEquipment = async (id, equipment) => {
    const isEquipmentInStock = await equipmentsRepository.findByID(id)
    if (isEquipmentInStock) {
        return await equipmentsRepository.updateEquipmentDetail(id, equipment)
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