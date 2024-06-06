const express = require('express')
const router = express.Router()
const { registerController, loginController, logoutController, getUsers } = require('../controllers/userController')
const { validateRegistrationFields, validateLoginFields } = require('../middleware/InputValidation')
const protected = require('../middleware/authMiddleware')


router.post('/register', validateRegistrationFields, registerController)
router.post('/login', validateLoginFields, loginController)
router.get('/auth-check', protected, (req, res) => {
    res.status(200).json({ authenticated: true })
})
router.post('/logout', protected, logoutController)
router.get('/get-users', protected, getUsers)


module.exports = router