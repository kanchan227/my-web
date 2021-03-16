var express=require('express');
var jwthelper=require('../config/jwtHelper');
var useCtrl=require('../controllers/userController');
var appRoutes=express.Router();
appRoutes.post('/newuser',useCtrl.addNewUser);
appRoutes.get('/display',useCtrl.displayAll);
appRoutes.get('/selecteduser/:userid',useCtrl.selectone);
appRoutes.put('/updaterecord/:id',useCtrl.updaterecord);
appRoutes.post('/newUser',useCtrl.addNewUser);
appRoutes.post('/auth',useCtrl.authenticate);
appRoutes.get('/profile',jwthelper.verifytoken,useCtrl.userProfile);
appRoutes.get('/uploadingImage',useCtrl.Image);
appRoutes.post('/upload',useCtrl.uploadingImage);

module.exports=appRoutes;

