const { Transaction } = require("../../db/transactionModel");

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
  });

  // const updateBalance = User.findByIdAndUpdate(req.body);
};

module.exports = createTransaction;
