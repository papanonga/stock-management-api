const db = require('../db/models')
const borrowersRepository = require('../repositories/borrowers.repository')

exports.add = async (person) => await borrowersRepository(person)

exports.getAll = async () => await borrowersRepository()

exports.edit = async (id, newPerson) => await borrowersRepository(id, newPerson)

exports.delete = async (id) => await borrowersRepository(id)
