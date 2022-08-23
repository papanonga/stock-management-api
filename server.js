const express = require('express')
const dotenv = require('dotenv')

dotenv.config()

const port = process.env.PORT || 4800
const env = process.env.NODE_ENV || "development"

const server = express()
server.use(express.json())
//static image

// routing
server.use(require('./src/routes/routes'))

server.listen(port, () => {
    console.log(`listening on port ${port}`)
    console.log(`environment : ${env}`)
    console.log(` Ctrl + C to quit`)
})
