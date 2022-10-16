const dotenv = require('dotenv')
dotenv.config()

module.exports = {
    "development": {
        "username": "p12wn34",
        "password": "p12wn34mmh",
        "database": "demo_stock",
        "host": "43.229.149.254",
        "dialect": "mariadb"
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
        "host": "43.229.149.254",
        "dialect": "postgres"
    }
}
// localhost:5432

// "development": {
//     "storage": "./dev.sqlite3",
//     "dialect": "sqlite",
// }


        // "storage": "./dev.sqlite3",
        // "dialect": "sqlite"