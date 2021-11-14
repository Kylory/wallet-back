const { User } = require("../../db/userModel");

const updateBalanceById = async (req, res) => {
  const { _id } = req.user;
  const { balance } = req;

  //   console.log(_id, balance);

  return await User.findByIdAndUpdate(_id, { balance: balance });
  //   console.log(await User.findByIdAndUpdate(_id, { balance: balance }));
};

module.exports = updateBalanceById;
