const { addUser } = require('../../model/users')
const Joi = require('joi')

const joiSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().min(6).max(12).required(),
  repeated_password: Joi.string().min(6).max(12).required(),
  name: Joi.string().min(1).max(12).required(),
})

const signup = async (req, res) => {
  const { error } = joiSchema.validate(req.body)

  if (error) {
    res.status(400).json({
      Status: '400 Bad Request',
      'Content-Type': 'application/json',
      ResponseBody: {
        message: 'Validation error',
      },
    })
    return
  }

  // Перевіряємо чи співпадають введені паролі
  if (req.body.password !== req.body.repeated_password) {
    res.status(400).json({
      Status: '400 Bad Request',
      'Content-Type': 'application/json',
      ResponseBody: {
        message: 'Entered passwords do not match',
      },
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

  res.status(201).json({
    Status: '201 Created',
    'Content-Type': 'application/json',
    ResponseBody: {
      message: 'New user created',
      token: result.token,
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
