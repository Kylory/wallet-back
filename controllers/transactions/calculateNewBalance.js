const calculateNewBalance = (type, amount, balance) => {
  let newBalance

  switch (type) {
    case 'increment':
      newBalance = balance + amount
      break
    case 'decrement':
      newBalance = balance - amount
      break
    default:
      break
  }
}

module.exports = calculateNewBalance
