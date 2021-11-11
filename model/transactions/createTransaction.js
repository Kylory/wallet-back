const { Transaction } = require("../../db/transactionModel");

const createTransaction = async (
  { date, type, category, comment, amount },
  _id
) => {
  return await Transaction.create({
    date,
    type,
    category,
    comment,
    amount,
    owner: _id,
  });

  // const updateBalance = User.findByIdAndUpdate(req.body);
};

module.exports = createTransaction;
