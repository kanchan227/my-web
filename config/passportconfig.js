var passport=require('passport');
var localpassport=require('passport-local').Strategy;
require('../models/usermodels');

const mongoose=require('mongoose');
var User=mongoose.model('user');

passport.use(
    new localpassport({usernameField:'email'},(username,password,done)=>{
        User.findOne({email:username},(err,user)=>{
            if(err)
            return done(err);
            else if(!user)
            return done(null,false,{message:'username is not registered'});
            else if(!user.verifypassword(password))
            return done(null,false,{message:'wrong password!!!'});
            else
            return done(null,user);
        });
    })
);