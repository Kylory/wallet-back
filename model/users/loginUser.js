const { User } = require('../../db/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const loginUser = async ({ email, password }) => {
  const user = await User.findOne({ email })

  // Якщо такого юзера немає в БД, то повертаємо null, який обробить інша функція
  if (!user) {
    return null
  }

  // Перевіряємо пароль. Якщо не співпадає, то повертаємо null, який обробить інша функція
  const checkPassword = await bcrypt.compare(password, user.password)
  if (!checkPassword) {
    return null
  }

  // Generate new token
  const token = jwt.sign(
    {
      _id: user._id,
    },
    process.env.JWT_SECRET
  )

  // Update user token in DB
  const UpdatedUser = await User.findByIdAndUpdate(
    { _id: user._id },
    { token: token },
    (options = { returnDocument: 'after' })
  )

  return {
    token: UpdatedUser.token,
    user: {
      email: UpdatedUser.email,
      name: UpdatedUser.name,
    },
  }
}

module.exports = loginUser
