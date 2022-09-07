const express = require('express')
const mongoose = require("mongoose")
const cors = require('cors')
const router = require('./Routes/auth')
const app = express()
app.use(cors())
app.use(express.json())
app.use('/api',router)
// if((process.env.NODE_ENV = 'devolopment')){
//     app.use(cors({origin : 'http://localhost:3000'}))
//   }
// const mongoURL = "mongodb+srv://yugesh:mongo786@cluster0.7ty0qlx.mongodb.net/?retryWrites=true&w=majority"
const mongoURL = "mongodb+srv://yugesh:mongo786@cluster0.smxym9s.mongodb.net/?retryWrites=true&w=majority"
// const mongoURL = "mongodb://localhost:27017/userLogin"
mongoose
  .connect(mongoURL, {
     useNewUrlParser: true, useUnifiedTopology: true 
  })
  .then(() => console.log("DB connected"))
  .catch((err) => console.log("DB Error => ", err));

app.listen(5000,()=>{
    console.log("app running on the port 5000 ")
})

// app.post("/post",async(req, res)=>{
//     console.log(req.body)
//     const {name } = req.body
//     try {
//         if(name == "jasmine"){
//             res.send({
//                 status:"ok"
//             })
//         } else {
//             res.send({
//                 status:"user not found"
//             })
//         }
//     } catch (error) {
//         res.send({
//             status:`something went wrong -- ${error}`
//         })
//     }
    
// })
// require("./Models/usersSchema")
// const User = mongoose.model("userInfo")
// app.post("/register",async(req,res) =>{
//     const {userName,email,phoneNumber} = req.body
//          try {
//             await User.create({
//                 userName,email,phoneNumber
//          })
//          res.send({
//             status:"ok"
//          })
//          } catch (error) {
//              res.send({
//                 status:error
//              })
//          }
// })