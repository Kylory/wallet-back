const { User } = require('../../db/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()
// const { nanoid } = require('nanoid')

const addUser = async ({ email, password, name }) => {
  const user = await User.findOne({ email })
  // const verifyToken = nanoid()

  // Якщо юзер уже є в БД, то повертаємо null, який обробить інша функція
  if (user) {
    return null
  }

  const newUser = await User.create({
    email,
    password: await bcrypt.hash(password, 10),
    name,
    // verifyToken,
  })

  // Generate jwt token
  const token = jwt.sign(
    {
      _id: newUser._id,
    },
    process.env.JWT_SECRET
  )

  // Update user token in DB
  const UpdatedUser = await User.findByIdAndUpdate(
    { _id: newUser._id },
    { token: token },
    (options = { returnDocument: 'after' })
  )
  return UpdatedUser
}

module.exports = addUser
