const { DateTime } = require('luxon')
const mongoose = require('mongoose')
const { justifyText, printJustifiedText } = require('../justify/justify')

const textSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    longeurText: {
        type: Number,
        required: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    createdAt: {
        default: DateTime.local().toSeconds(),
        type: Number
    },
})

textSchema.methods.justifyTheText = function (longLine = 80) {
    const text = this
    let words = []
    let result = []
    words = text.text.split(' ')

    result = justifyText(words, longLine)
    resultFinal = printJustifiedText(result)

    return resultFinal

}

const Text = mongoose.model('Text', textSchema)

module.exports = Text