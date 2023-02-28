const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const config = require('./utils/config')
require('express-async-errors')

const app = express()

const usersRouter = require('./controllers/users')
const complaintsRouter = require('./controllers/complaints')

console.log(`connecting to MongoDB ${config.MONGODB_URI}`);

mongoose
  .connect(config.MONGODB_URI)
  .then(() => {
    console.log('connected to MongoDB');
  })
  .catch((error) => {
    console.error(`error connecting to MongoDB ${error}`);
  })

app.use(cors())
app.use(express.json())

app.use('/api/users', usersRouter)
app.use('/api/complaints', complaintsRouter)

module.exports = app