const express = require('express')
const router = express.Router()
const { controllerWrapper, authMiddleware } = require('../../middlewares')
const {
  getAllTransactions,
  getTransactionsByDate,
  getCategories,
  addTransaction,
  //   updateById,
  //   removeById,
  //   updateStatusById,
} = require('../../controllers/transactions')
// const createTransaction = require("../../controllers/transactions");
// const getTransactions = require("../../controllers/transactions");

// router.use(authMiddleware)

router.post(
  '/getTransactionsByDate',
  authMiddleware,
  controllerWrapper(getTransactionsByDate)
)

router.get('/', authMiddleware, controllerWrapper(getAllTransactions))

router.get('/categories', authMiddleware, controllerWrapper(getCategories))

router.post('/', authMiddleware, controllerWrapper(addTransaction))

// router.delete('/:contactId', controllerWrapper(removeById))

// router.put('/:contactId', controllerWrapper(updateById))

// router.patch('/:contactId/favorite', controllerWrapper(updateStatusById))

module.exports = router
