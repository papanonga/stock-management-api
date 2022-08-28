const db = require('../db/models')


exports.register = async (account) => await db.Accounts.create(account)


exports.findByUsername = async (username) => await db.Accounts.findAll({
    where : {
        username
    }
})


exports.editPassword = async (username, password) => await db.Accounts.update({
    
})