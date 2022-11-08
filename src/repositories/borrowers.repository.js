const db = require('../db/models')

exports.addBorrower = async (person) => await db.borrowers.create(person)

exports.getAllBorrowers = async () => await db.borrowers.findAll()

exports.edit = async (id, newPerson) => await db.borrowers.update({
    newPerson,
    where : {
        id
    }
})

exports.delete = async (id) => await db.borrowers.destroy({
    where: {
        id
    }
})