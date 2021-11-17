const { getTransactions } = require('../../model/transactions')
const Joi = require('joi')

const joiSchema = Joi.object({
  year: Joi.number().required(),
  month: Joi.number(),
})

const getTransactionsByDate = async (req, res) => {
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

  const { _id } = req.user
  const { year, month } = req.body

  const allTransactions = await getTransactions(_id)

  const getTransactionsByDates = (year, month) => {
    let filteredTransactions
    if (month) {
      filteredTransactions = allTransactions.filter(
        (transaction) =>
          new Date(transaction.date).getFullYear() === year &&
          new Date(transaction.date).getMonth() === month - 1
      )
      return filteredTransactions
    }

    filteredTransactions = allTransactions.filter(
      (transaction) => new Date(transaction.date).getFullYear() === year
    )
    return filteredTransactions
  }

  const filteredTransactions = getTransactionsByDates(year, month)

  res.status(200).json({
    Status: '200 OK',
    'Content-Type': 'application/json',
    ResponseBody: { filteredTransactions },
  })
}

module.exports = getTransactionsByDate
