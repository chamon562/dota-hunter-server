const express = require('express')
const app = express()


// for the form data to be processed into req.body
app.use(express.urlencoded({extended: false}))

// express to recongise the req.body as a json object
app.use(express.json())

// including the controller
app.use('/heroes', require('./routes/heroes'))

// get route
app.get('/', (req, res)=>{
    res.send('This the Home Route to Dota Hunter server🦧')
})

app.listen(8318,() =>{
    console.log('This what love sound like❤️')
})
