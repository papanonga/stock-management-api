const db = require('../db/models')


exports.register = async (account) => await db.accounts.create(account)


exports.findByUsername = async (username) => await db.accounts.findAll({
    where : {
        username
    }
})


exports.editPassword = async (username, password) => await db.accounts.update({
    
})