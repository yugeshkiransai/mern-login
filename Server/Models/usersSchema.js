
const mongoose =  require("mongoose")

const userDetailSchemma =  new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    lastName: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    email: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
        unique: true
    },
    hashed_Password: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 1024
    },
    salt: String,
},{timestamps:true});

//vertual
userDetailSchemma.virtual('password')
.set(function(password){
      this._password = password
      this.salt = makeSalt()
      this.hashed_Password =this.encryptedPassword(password)
})
.get(function(){
    return this._password
})

//methods
userDetailSchemma.methods = {
    encryptedPassword: function(password){
           if(!password){
             return ''
           }
           try {
            createHmac('sha1', this.salt)
               .update(password)
               .digest('hex');
           } catch (error) {
              return ''
           }
    },
    makeSalt: function(){
        return Math.round(new Date().valueOf() * Math.random()) + ""
    }
}


module.exports = mongoose.model("User" , userDetailSchemma)

