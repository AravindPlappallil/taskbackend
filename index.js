const express = require('express')
const cors = require('cors')
const router = require('./router/router')
const server = express()
require('dotenv').config()



server.use(cors())
server.use(express.json())
server.use(router)
require('./db/connection')

const port = 4000 || process.env.port 
server.listen(port,()=>{
    console.log(`---server runing on port ${port}---`);
})