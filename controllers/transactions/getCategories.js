const { getTransactionCategories } = require("../../model/transactions");

const getCategories = async (_, res) => {
  const CATEGORIES = await getTransactionCategories();
  console.log(CATEGORIES);

  res.status(200).json({
    Status: "200 OK",
    "Content-Type": "application/json",
    ResponseBody: CATEGORIES,
  });
};

module.exports = getCategories;
