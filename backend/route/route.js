const express = require('express')
const router = express.Router()
const authController = require('../controller/useController')


router.post('/register', authController.register)
router.post('/login', authController.login)

router.get('/logout', authController.logout_get)


module.exports = router;
