// Express is a Node.js framework
const express = require('express')
const app = express()

// Mongoose.js makes it easier for Node.js and MongoDB to communicate
const mongoose = require('mongoose')

// Show Node where DB is located:
mongoose.connect('mongodb://localhost/subscribers', { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to DataBase!!'))


// app.use allows you to use a middelware, in this case
// the Express method that returns JSON
app.use(express.json())


// SETUP ROUTES:
// subscriberRouter is a middleware we're creating:
const subscriberRouter = require('./routes/subscribers')
app.use('/subscribers', subscriberRouter)

app.listen(3000, () => console.log('The server has started!!'))