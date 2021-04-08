const mongoose = require('mongoose')

// subscriber is the model
const subscriberSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    subscribedToChannel: {
        type: String,
        required: true
    },
    subscribedToDate: {
        type: Date,
        required: true,
        default: Date.now
    }
})


module.exports = mongoose.model('Subscriber', subscriberSchema)