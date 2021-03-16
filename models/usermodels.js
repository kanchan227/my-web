const mongoose=require('mongoose');
const bcrypt=require('bcrypt');
const { JsonWebTokenError } = require('jsonwebtoken');
const { EmailValidator, MinLengthValidator } = require('@angular/forms');


var userSchema=mongoose.Schema({
    name:{type:String,
      required:true},
    email:{type:String,
      required:true,
    ValidityState:EmailValidator},
    contact:{type:String,
      required:true},
    password:{type:String,
      require:true,
    ValidityState:MinLengthValidator},
    saltString:String
});

userSchema.pre('save',function(next){
    bcrypt.genSalt(10,(err,salt)=>{
       bcrypt.hash(this.password,salt,(err,hash)=>{
           this.password=hash;
           this.saltString=salt;
           next();
       })
    })
})

userSchema.methods.verifypassword=function(password){
    return bcrypt.compareSync(password,this.password);
}

mongoose.model('user',userSchema);
