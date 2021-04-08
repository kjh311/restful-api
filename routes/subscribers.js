const express = require('express')
const router = express.Router()
const Subscriber = require('../models/subscriber')

// Needs to work in conjunction with route.rest

// Getting all. '/' means all.
router.get('/', (req, res) => {
    res.send('Hello World')
})

// getting one
// '/:id' returns a specific db Object, matching the number after '/'
router.get('/:id', (req, res) => {
    res.send(req.params.id)
    
})

// Creating one
// doesn't require an id
router.post('/', (req, res) => {

})

// Updating one
router.patch('/:id', (req, res) => {

})

// Deleting one
router.delete('/id', (req, res) => {

})


module.exports = router