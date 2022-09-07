require("../Models/usersSchema")
const mongoose = require("mongoose")
const User = mongoose.model("User")
exports.signUp = async (req, res) =>{
    // console.log("controller requested body",req.body)
    const {firstName,lastName,email,password} = req.body
    const encryptPassword = await bycript.hash(password,20)
    try {
       const emailExists = await User.findOne({email})
       console.log("email exisst",emailExists)
       if(emailExists){
        return res.status(400).json({
            error:"Email Id already exists"
        })
       }
        
        await User.create({
            firstName,lastName,email,password:encryptPassword
          })
          res.send({
            status:"user saved"
          })
    } catch (error) {
        res.json({
            error :`something went wrong -- ${error}`
        })
    }
      

}