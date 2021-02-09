const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const userRouter = require('./routers/user')
const textRouter = require('./routers/text')


const app = express()

app.use(express.json())
app.use(userRouter)
app.use(textRouter)

module.exports = app

