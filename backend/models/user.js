const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  nik: {
    type: String,
    minLength: 16,
    maxLength: 16,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  passwordHash: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  level: {
    type: String,
    enum: ['masyarakat', 'petugas', 'admin']
  }
})

userSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id;
    delete returnedObject.__v;
    // the passwordHash should not be revealed
    delete returnedObject.passwordHash;
  },
})

const User = mongoose.model('User', userSchema)

module.exports = User