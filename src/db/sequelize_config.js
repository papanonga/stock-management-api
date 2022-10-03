const dotenv = require('dotenv')
dotenv.config()

module.exports = {
    "development": {
        "storage": "./dev.sqlite3",
        "dialect": "sqlite",
       
        
    },
    "test": {
        "username": "cizdkfrc",
        "password": "4NMgbGCsdpmG9Nb3cQHUVL7BJMXtFNDI",
        "database": "cizdkfrc",
        "host": "arjuna.db.elephantsql.com",
        "dialect": "postgres"
    },
    "production": {
        "username": "airconkg",
        "password": "P12wn34mmh@",
        "database": "stock_application",
        "host": "43.229.149.254:5432",
        "dialect": "postgres"
    }
}
// localhost:5432





        // "storage": "./dev.sqlite3",
        // "dialect": "sqlite"