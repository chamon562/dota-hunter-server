// this file is all for setting up the mongoose connection
const mongoose = require('mongoose')

// mMongo Connection String 
mongoose.connect('mongodb://localhost/bountyhunters', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true
    
})

// shortcut to mongoose.connection object
const db = mongoose.connection 

// set up an event listener to fire once when the connection 'opens' to console log what host and port it is running on
db.once('open', () =>{
    console.log(`Connected to MongoDB at ${db.host}:${db.port}`)
})

// set up an event listener to fire once when the connection 'open' console log what host and port it is running on
db.on('error', (error)=>{
    console.error(`Database error:\n${error}`)
})

// Export all the things
module.exports.Hero = require('./heroes')