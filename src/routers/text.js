const express = require('express')
const Text = require('../models/text')
const auth = require('../middlaware/auth')
const rateLimit = require('../middlaware/rateLimit')
const { json } = require('express')
const router = new express.Router()

router.post('/api/justify', auth, rateLimit, async (req, res) => {
    const text = new Text({
        ...req.body,
        longeurText: req.body.text.length,
        owner: req.user._id
    })
    try {
        await text.save()
        const textJustify = text.justifyTheText()
        
        res.set('Content-Type', 'text/plain');
        //res.status(201).send({textJustify})
        res.status(201).send(JSON.stringify({textJustify}))
    } catch (e) {
        res.status(400).send(e)
    }
})

module.exports = router