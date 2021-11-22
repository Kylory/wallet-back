const { Transaction } = require('../../db/transactionModel')

const createTransaction = async (
  { date, type, category, comment, amount },
  _id,
  balance
) => {
  return await Transaction.create({
    date,
    type,
    category,
    comment,
    amount,
    balance,
    owner: _id,
  })
}

module.exports = createTransaction
