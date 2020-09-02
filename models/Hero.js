const mongoose = require('mongoose')

// creating a hero schema 
let heroSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 100
    },
    knownFor: {
        type: String,
        required: true
    },
    client: {
        type: String,
        required: true
    },
    reward: {
        type: Number,
        default: 500
    }
})

module.exports = mongoose.model('Hero', heroSchema)