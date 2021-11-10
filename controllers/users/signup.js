const { addUser } = require('../../model/users')
// const { sendEmail } = require('../../utils')
const Joi = require('joi')

const joiSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required(),
  repeated_password: Joi.string().required(),
  name: Joi.string().required(),
})

const signup = async (req, res) => {
  const { error } = joiSchema.validate(req.body)

  if (error) {
    res.status(400).json({
      Status: '400 Bad Request',
      'Content-Type': 'application/json',
      ResponseBody: 'Validation error',
    })
    return
  }
  console.log(req.body)
  if (req.body.password !== req.body.repeated_password) {
    res.status(400).json({
      Status: '400 Bad Request',
      'Content-Type': 'application/json',
      ResponseBody: 'Entered passwords do not match',
    })
    return
  }

  // addUser поверне null, якщо такий юзер уже є в БД
  const result = await addUser(req.body)

  if (!result) {
    res.status(409).json({
      Status: '409 Conflict',
      'Content-Type': 'application/json',
      ResponseBody: {
        message: 'Email in use',
      },
    })
    return
  }

  // const message = {
  //   to: result.email,
  //   subject: 'Confrim registration',
  //   html: `<a target="_blank" href="http://localhost:3000/api/users/verify/${result.verifyToken}">Click to confrim registration</a>`,
  // }

  // sendEmail(message)

  res.status(201).json({
    Status: '201 Created',
    'Content-Type': 'application/json',
    ResponseBody: {
      // message: 'Verification link has been sent to you email',
      user: {
        name: result.name,
        email: result.email,
      },
    },
  })
}

module.exports = {
  signup,
}
