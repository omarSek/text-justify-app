const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const userRouter = require('./routers/user')
const textRouter = require('./routers/text')


const app = express()
const port = process.env.PORT

//app.use(express.json())
app.use(express.json())
app.use(userRouter)
app.use(textRouter)


app.listen(port, () => {
    console.log('Server is up on port', port)
})