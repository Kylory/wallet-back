const { User } = require('../../db/userModel')
const bcrypt = require('bcrypt')
// const { nanoid } = require('nanoid')

const addUser = async ({ email, password, name }) => {
  const user = await User.findOne({ email })
  // const verifyToken = nanoid()

  // Якщо юзер уже є в БД, то повертаємо null, який обробить інша функція
  if (user) {
    return null
  }

  return await User.create({
    email,
    password: await bcrypt.hash(password, 10),
    name,
    // verifyToken,
  })
}

module.exports = addUser
