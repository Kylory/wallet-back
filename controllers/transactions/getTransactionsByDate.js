const { getTransactions } = require('../../model/transactions')

const getTransactionsByDate = async (req, res) => {
  // const { _id } = req.user
  // const allTransactions = await getTransactions(_id)
  // // console.log(allTransactions);
  // // якщо массив порожній
  // if (allTransactions.length === 0) {
  //   res.status(200).json({
  //     Status: '200 OK',
  //     'Content-Type': 'application/json',
  //     ResponseBody: {
  //       message: 'You have no transactions yet',
  //     },
  //   })
  //   return
  // }
  // res.status(200).json({
  //   Status: '200 OK',
  //   'Content-Type': 'application/json',
  //   ResponseBody: { allTransactions },
  // })
}

module.exports = getTransactionsByDate
