const mongoose = require('mongoose')

const departmentSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    bounties: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hero',
    }]
})

modules.exports = mongoose.model('Department', departmentSchema)