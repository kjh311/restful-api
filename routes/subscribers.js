"use strict";

const express = require('express')
const subscriber = require('../models/subscriber')
const router = express.Router()
const Subscriber = require('../models/subscriber')

// Needs to work in conjunction with route.rest

// Getting all. '/' means all.
//async returns a promise
router.get('/', async (req, res) => {
    try {
        //await waits for the response
        const subscribers = await Subscriber.find()
        res.json(subscribers)
    } catch (err) {
        //500 means the server encountered a problem
        res.status(500).json({ message: err.message })
    }

})

// getting one
// '/:id' returns a specific db Object, matching the number after '/'
router.get('/:id', (req, res) => {
    res.send(req.params.id)
})

// Creating one
// doesn't require an id
router.post('/', async (req, res) => {
    const subscriber = new Subscriber({
        name: req.body.name,
        subscribedToChannel: req.body.subscribedToChannel
    })
    try {
        const newSubscriber = await subscriber.save()
        //201 successful post
        res.status(201).json(newSubscriber)
    } catch (err) {
        //client error
        res.status(400).json({ message: err.message})
    }
})

// Updating one
router.patch('/:id', (req, res) => {

})

// Deleting one
router.delete('/id', (req, res) => {

})


module.exports = router