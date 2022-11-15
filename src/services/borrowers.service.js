const db = require('../db/models')
const borrowersRepository = require('../repositories/borrowers.repository')

exports.add = async (person) => await borrowersRepository.addBorrower(person)

exports.getAll = async () => await borrowersRepository.getAllBorrowers()

exports.edit = async (id, newPerson) => await borrowersRepository.edit(id, newPerson)

exports.delete = async (id) => await borrowersRepository.delete(id)
