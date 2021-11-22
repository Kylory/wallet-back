const express = require('express')
const router = express.Router()
const { controllerWrapper, authMiddleware } = require('../../middlewares')

const { signup, login, logout, current } = require('../../controllers/users')

router.post('/signup', controllerWrapper(signup))

router.post('/login', controllerWrapper(login))

router.post('/logout', authMiddleware, controllerWrapper(logout))

router.get('/current', authMiddleware, controllerWrapper(current))

module.exports = router
