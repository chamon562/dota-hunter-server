// my first rout thats for my heroes and reference models
const db = required('../models')
const router = require('express').Router()

// stub out the routes basic 

// get the /heroes
router.get('/', (req, res) =>{
    res.send('GET GET ')
})

// get /heroes/:id
router.get('/:id', (req, res) =>{
    res.send('Get Id')
})

// post /heroes
router.post('/', (req,res) =>{
    res.send(' Post Route')
})

// put /heroes/:id

router.put('/:id', (req,res) =>{
    res.send('Put updates the info')
})
// delete /herores/:id


router.delete('/:id', (req, res) =>{
    res.send('Finna Destroy')
})


module.exports = router