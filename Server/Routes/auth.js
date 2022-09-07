const express = require('express')
const { signUp } = require('../Controllers/auth')
const { userSignUpValidator } = require('../Validator/Auth')
const { runValidation } = require('../Validator/Index')

const router = express.Router()

router.post('/register',userSignUpValidator,runValidation,signUp)

module.exports = router