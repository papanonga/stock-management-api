const accountRepository = require('../repositories/account.repository')
const bcrypt = require('bcryptjs');
exports.register = async (account) => {
    const isRegistered = await accountRepository.findByUsername(account.username)
    if(isRegistered.length >= 1){
        // already registered
        return 
    }
    account.password = await bcrypt.hash(account.password, 7)
    return await accountRepository.register(account)
}


exports.login = async (account) => {
    const hasAccount = await accountRepository.findByUsername(account.username)
    const dbPassword = hasAccount[0].dataValues.password
    console.log("Database password", dbPassword)

    // console.log(await bcrypt.compare(account.password, dbPassword))
    if (dbPassword && await bcrypt.compare(account.password, dbPassword)){
        return "asdac,kqmwko120-2189czxi0u812u893y2891"
    }
    return
}


