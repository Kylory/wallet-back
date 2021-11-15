const { User } = require('../../db/userModel')

const updateBalanceById = async (req, res) => {
  const { _id } = req.user
  const { balance } = req

  return await User.findByIdAndUpdate(_id, { balance: balance })
}

module.exports = updateBalanceById
