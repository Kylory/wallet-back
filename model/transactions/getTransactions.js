const { Transaction } = require("../../db/transactionModel");

const getTransactions = async (id) => {
  return await Transaction.find({ owner: id });
  //   res.status(200).json({ transactions });
};

module.exports = getTransactions;
