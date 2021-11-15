const calculateNewBalance = (type, amount, balance) => {
  switch (type) {
    case 'increment':
      return balance + amount
    case 'decrement':
      return balance - amount
    default:
      return
  }
}

module.exports = calculateNewBalance
