const { getTransactions } = require("../../model/transactions");

const getAllTransactions = async (req, res) => {
  const { _id } = req.user;
  const allTransactions = await getTransactions(_id);

  // якщо массив порожній
  if (allTransactions.length === 0) {
    res.status(200).json({
      Status: "200 OK",
      "Content-Type": "application/json",
      ResponseBody: [],
    });

    return;
  }

  res.status(200).json({
    Status: "200 OK",
    "Content-Type": "application/json",
    ResponseBody: { allTransactions },
  });
};

module.exports = getAllTransactions;
