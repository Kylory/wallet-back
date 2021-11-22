const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
  },
  name: {
    type: String,
    minlength: 1,
    maxlength: 12,
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
  balance: {
    type: Number,
    default: 0,
  },
})

const User = mongoose.model('User', userSchema)

module.exports = { User }
