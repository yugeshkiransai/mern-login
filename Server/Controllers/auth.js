require("../Models/usersSchema")
const bcrypt = require('bcryptjs')
const mongoose = require("mongoose")
const User = mongoose.model("User")

exports.signUp = async (req, res) =>{
    console.log("controller requested body",req.body)
    const {firstName,lastName,email,password} = req.body
    try {
       const emailExists = await User.findOne({email})
       console.log("email exisst",emailExists)
       if(emailExists){
        return res.status(400).json({
            error:"Email Id already exists"
        })
       }
       const salt = await bcrypt.genSalt(10)
       let hashed_Password = await bcrypt.hash(password,salt)
        
        await User.create({
            firstName,lastName,email,password:hashed_Password
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