const { getUserByToken } = require('../../model/users')

const current = async (req, res) => {
  const token = req.token
  const user = await getUserByToken(token)

  res.status(200).json({
    Status: '200 OK',
    'Content-Type': 'application/json',
    ResponseBody: {
      email: user.email,
    },
  })
}

module.exports = { current }
