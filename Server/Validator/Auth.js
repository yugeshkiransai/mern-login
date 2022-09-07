const { check } = require('express-validator')

exports.userSignUpValidator = [
    check('firstName')
        .not()
        .isEmpty()
        .withMessage('first name is required')
        .isAlpha()
        .withMessage('Must be only alphabetical chars')
        .isLength({ min: 10 })
        .withMessage('Must be at least 10 chars long'),
    check('lastName')
        .not()
        .isEmpty()
        .withMessage('last name is required')
        .isAlpha()
        .withMessage('Must be only alphabetical chars')
        .isLength({ min: 10 })
        .withMessage('Must be at least 10 chars long'),
    check('email')
        .isEmail()
        .withMessage('email is required')
        .custom(email => {
            if (alreadyHaveEmail(email)) {
                throw new Error('Email already registered')
            }
        }),

    check('password')
        .isLength({ min: 6 })
        .withMessage('password is required')
        .matches(
            /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d@$.!%*#?&]/,
        )
        .withMessage(`password must contain min 6 char along with
        At least one uppercase.
        At least one lower case.
        At least one special character`)
]

