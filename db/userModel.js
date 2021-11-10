const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
  },
  name: {
    type: String,
    required: [true, 'Name is required'],
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
  },
  token: {
    type: String,
    default: null,
  },
  // verify: {
  //   type: Boolean,
  //   default: false,
  // },
  // verifyToken: {
  //   type: String,
  //   required: [true, 'Verify token is required'],
  // },
})

const User = mongoose.model('User', userSchema)

module.exports = { User }
