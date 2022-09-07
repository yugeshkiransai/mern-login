const {validationResult} = require('express-validator')

exports.runValidation = (req,res,next) => {
    // console.log(req)
    const errors = validationResult(req.body)
    if(!errors.isEmpty()){
        res.status(400).json({
            errors:errors.array()
        })
    }
    next()
}