const { Transaction } = require("../../db/transactionModel");

const getTransactions = async (id) => {
  return await Transaction.find({ owner: id });
};

module.exports = getTransactions;
