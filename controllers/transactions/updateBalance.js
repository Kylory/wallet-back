const updateBalance = (type, amount, balance) => {
  let newBalance;
  if (type === "increment") {
    newBalance = balance + amount;
  } else {
    newBalance = balance - amount;
  }
  return newBalance;
};

module.exports = updateBalance;
