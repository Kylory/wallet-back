const { getTransactions } = require("../../model/transactions");
// const { Transaction } = require("../../db/transactionModel");
// const { getUserByToken } = require("../../model/users");

const getAllTransactions = async (req, res) => {
  const { _id } = req.user;
  const allTransactions = await getTransactions(_id);
  console.log(allTransactions);
  // якщо пустий массив
  // if (allTransactions.length === 0) {
  //   res.status(204).json();
  // }
  res.status(200).json({
    Status: "200 OK",
    "Content-Type": "application/json",
    ResponseBody: { allTransactions },
  });
};

module.exports = getAllTransactions;
