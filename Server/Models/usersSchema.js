
const mongoose =  require("mongoose")

const userDetailSchemma =  new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },
    lastName: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },
    email: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
        unique: true
    },
    password: {
        type: String,
        required: true,
        // minlength: 5,
        // maxlength: 1024
    },
    salt: String,
},{timestamps:true});

//vertual
// userDetailSchemma.virtual('password')
// .set(function(password){
//       this._password = password
//       this.hashed_Password =this.encryptedPassword(password)
//       this.salt = makeSalt()
// })
// .get(function(){
//     return this._password
// })

//methods
// userDetailSchemma.methods = {
//     authenticate: function(plaintext){
//           return this.encryptedPassword(plaintext) === this.hashed_Password
//     },
//     encryptedPassword: function(password){
//            if(!password){
//              return ''
//            }
//            try {
//             console.log("passss",password)
//             console.log("hash", crypto.createHmac('sha1', this.salt)
//             .update(password)
//             .digest('hex'))
//            return crypto.createHmac('sha1', this.salt)
//                .update(password)
//                .digest('hex');
//            } catch (error) {
//               return ''
//            }
//     },
//     makeSalt: function(){
//         return Math.round(new Date().valueOf() * Math.random()) + "";
//     }
// }


module.exports = mongoose.model("User" , userDetailSchemma)

