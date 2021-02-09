const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const User = require('../../src/models/user')
const Text = require('../../src/models/text')


const userOneId = new mongoose.Types.ObjectId()

const userOne = {
    _id: userOneId,
    name: 'Mike',
    email: 'fo_ouaissi_sekouti@esi.dz',
    password: '5Gwhal!!',
    tokens: [{
        token: jwt.sign({ _id: userOneId }, process.env.JWT_SECRET)
    }]
}

const userTwoId = new mongoose.Types.ObjectId()
const userTwo = {
    _id: userTwoId,
    name: 'Mike',
    email: 'omar.ouaissi.sekouti@esi.dz',
    password: 'meTwofarthan!',
    tokens: [{
        token: jwt.sign({ _id: userTwoId }, process.env.JWT_SECRET)
    }]
}


const setupDatabase = async () => {
    await User.deleteMany()
    await Text.deleteMany()
    await new User(userOne).save()
    await new User(userTwo).save()
 
}

module.exports = {
    userOneId,
    userOne,
    userTwoId,
    userTwo,
    setupDatabase
}