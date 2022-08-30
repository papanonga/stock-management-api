const accountRepository = require('../repositories/account.repository')
const bcrypt = require('bcryptjs');

const jwt = require('../configs/jwt')



exports.register = async (account) => {
    const isRegistered = await accountRepository.findByUsername(account.username)
    if (isRegistered.length >= 1) {
        // already registered
        return
    }
    account.password = await bcrypt.hash(account.password, 7)
    return await accountRepository.register(account)
}


exports.login = async (account) => {
    const hasAccount = await accountRepository.findByUsername(account.username)
    const dbPassword = hasAccount[0].dataValues.password
    const username = hasAccount[0].dataValues.username

    if (username && await bcrypt.compare(account.password, dbPassword)) {
        const payload = {
            sub : username,
            role : hasAccount[0].dataValues.role
        }
        return jwt.generateToken(payload)
    }
    return
}


