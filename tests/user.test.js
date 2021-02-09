const request = require('supertest')
const app = require('../src/app')
const User = require('../src/models/user')
const { userOneId, userOne, setupDatabase } = require('./fixtures/db')

beforeEach(setupDatabase)



// afterEach(() => {
//     console.log('afterEach')
// })


test('Should signup a new user', async () => {
    const response = await request(app).post('/users').send({
        name: 'Omar',
        email: 'fo_ouaissi_sekouti_@esi.dz',
        password: 'MyPass777!'
    }).expect(201)

    console.log(response)
    // Assert that the database was changed correctly
    const user = await User.findById(response.body.user._id)
    expect(user).not.toBeNull()

    // // Assertions about the reponse
    expect(response.body.user.email).toBe('fo_ouaissi_sekouti_@esi.dz')
    expect(response.body).toMatchObject({
        user: {
            email: 'fo_ouaissi_sekouti_@esi.dz'
        },
        token: user.tokens[0].token
    })

    expect(user.password).not.toBe('Mypass777!')

})


test('Should login existing user', async () => {
    const response = await request(app).post('/users/login').send({
        email: userOne.email,
        password: userOne.password
    }).expect(200)

    const user = await User.findById(userOneId)
    expect(user).not.toBeNull()

    expect(response.body.token).toBe(user.tokens[1].token)

})

test('Should not login nonexistent user', async () => {
    await request(app).post('/users/login').send({
        email: '123456@gmail.com',
        password: '123456789'
    }).expect(400)
})
