const Joi = require('joi')
const { createTransaction } = require('../../model/transactions')
const { getUserByToken } = require('../../model/users')
const calculateNewBalance = require('./calculateNewBalance')
const { updateBalanceById } = require('../../model/users')

const joiSchema = Joi.object({
  date: Joi.date().required(),
  type: Joi.string().valid('increment', 'decrement').required(),
  category: Joi.string()
    .valid(
      'main',
      'food',
      'car',
      'evolution',
      'children',
      'home',
      'education',
      'other'
    )
    .required(),
  comment: Joi.string(),
  amount: Joi.number().required(),
  balance: Joi.number(),
})

const addTransaction = async (req, res) => {
  const { error } = joiSchema.validate(req.body)
  if (error) {
    res.status(400).json({
      Status: '400 Bad Request',
      'Content-Type': 'application/json',
      ResponseBody: error.message,
    })

    return
  }

  const { _id } = req.user
  const { balance } = await getUserByToken(req.token)
  const type = req.body.type
  const amount = req.body.amount

  const NEW_BALANCE = calculateNewBalance(type, amount, balance)
  req.balance = NEW_BALANCE

  await updateBalanceById(req)
  const result = await createTransaction(req.body, _id, NEW_BALANCE)

  res.status(201).json({
    Status: '201 Created',
    'Content-Type': 'application/json',
    ResponseBody: {
      date: result.date,
      type: result.type,
      category: result.category,
      comment: result.comment,
      amount: result.amount,
      balance: result.balance,
    },
  })
}

module.exports = addTransaction
