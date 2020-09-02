const { create } = require('../models/hero')

// my first rout thats for my heroes and reference models
const db = require('../models')
const router = require('express').Router()

// stub out the routes basic 

// get the /heroes
router.get('/', (req, res) =>{
    db.Hero.find()
    .then(foundHeroes =>{
        res.send(foundHeroes)
    })
    .catch(error =>{
        console.log('heroes.js 🐝line 14 ', error)
        res.status(503).send({message: 'Database asleep?'})
    })
    // res.send('GET GET ')
})

// get /heroes/:id
router.get('/:id', (req, res) =>{
    db.Hero.findById(req.params.id)
    .then(foundHero =>{
        if(foundHeroes){
            res.send(foundHero)
        } else{
            res.send(404).send({message: 'Resource not located.'})
        }
    }).catch(error =>{
        console.log(error)
        res.status(503).send({message: 'Service Unavailable'})
    })
    // res.send('Get Id')
})

// post /heroes
router.post('/', (req,res) =>{
    console.log(req.body)
    db.Hero.create(req.body)
    .then(createdHero =>{
        console.log(createdHero)
        res.status(201).send(createdHero)
    })
    .catch(error =>{
        console.log('Error white creating', error)
        if(error.name === 'ValidationError'){
            res.status(406).send({message: 'Validation error'})
        } else {
            res.status(503).send({message: "database or server error"})
        }
    })
    // res.send(' Post Route')
})

// put /heroes/:id

router.put('/:id', (req, res)=>{
    db.Hero.findOneAndUpdate({
        _id: req.params.id
    },
    req.body,
    {
        new: true
    })
    .then(updatedHero=>{
        res.send(updatedHero)
    })
    .catch(err=>{
        console.log(err)
        res.status(503).send({message: 'Server Error'})
    })
    // res.send('You\'ve hit the PUT /bounties/:id route!')
})

// delete /herores
router.delete('/', (req, res) =>{
    db.Hero.deleteMany()
    .then(() =>{
        res.send({message: 'we got it?'})
    })
    .catch(error =>{
        res.status(503).send({message: 'Server Error'})
    })
    // res.send('Finna Destroy')
})

// Delete /bounties/:id
router.delete('/:id', (req, res) =>{
    db.Hero.findByIdAndDelete(req.params.id)
    .then(() =>{
        res.status(204).send()
    })
    .catch(error =>{
        console.log(error)
        res.status(503).send({message: 'Server Error'})
    
    })
    //  res.send('hit the delete')
})


module.exports = router