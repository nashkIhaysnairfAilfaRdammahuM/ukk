const User = require('../models/user')
const usersRouter = require('express').Router()
const bcrypt = require('bcrypt')

usersRouter.get('/', async (request, response) => {
  const users = await User.find({})
  response.status(200).json(users)
})

usersRouter.post('/', async (request, response) => {
  const { nik, name, username, password, phoneNumber, level } = request.body
  
  const saltRounds = 10
  const passwordHash = await bcrypt.hash(password, saltRounds)

  const user = new User({
    nik,
    name,
    username,
    passwordHash,
    phoneNumber,
    level: level || 'masyarakat'
  })

  const savedUser = await user.save()

  response.status(201).json(savedUser)
})

usersRouter.put('/:id', async (request, response) => {
  const updatedUser = await User.findByIdAndUpdate(
    request.params.id,
    { ...request.body },
    { new: true, runValidators: true, context: "query" }
  )

  response.status(200).json(updatedUser)
})

module.exports = usersRouter