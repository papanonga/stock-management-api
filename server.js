const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
dotenv.config()

const port = process.env.PORT || 4800
const env = process.env.NODE_ENV || "development"

const server = express()
server.use(cors())
server.use(express.json())
// server.use(cors())


//static image


// routing
server.use(require('./src/routes/routes'))

server.listen(port, () => {
    console.log(`listening on port ${port}`)
    console.log(`environment : ${env}`)
    console.log(` Ctrl + C to quit`)
})
