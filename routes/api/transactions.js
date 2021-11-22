const express = require('express')
const router = express.Router()
const { controllerWrapper, authMiddleware } = require('../../middlewares')
const {
  getAllTransactions,
  getTransactionsByDate,
  getCategories,
  addTransaction,
} = require('../../controllers/transactions')

router.post('/period', authMiddleware, controllerWrapper(getTransactionsByDate))

router.get('/', authMiddleware, controllerWrapper(getAllTransactions))

router.get('/categories', authMiddleware, controllerWrapper(getCategories))

router.post('/', authMiddleware, controllerWrapper(addTransaction))

module.exports = router
