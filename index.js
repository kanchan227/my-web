require('./config/db');
var express=require('express');
var bodyparser=require('body-parser');
var api=require('./routes/userRoutes');
var cors=require('cors');

var app=express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use(cors());
app.use('/',api);

app.use((req,res,next)=>{
  res.setHeader('Access-Control-Allow-Origin' ,'*'),
  res.setHeader('Access-Control-Allow-Credential',true),
  res.setHeader('Access-Control-Alow-Methods','GET,POST,PUT,DELETE,OPTIONS'),
  res.setHeader('Access-Control-Allow-Headers', 'Origin,Content-Type,Accept')
})

const port=process.env.PORT || 3000;

app.listen(port,(err)=>{
    if(err)
    console.log('Error in running'+err);

    else
    console.log('Server is running at '+port)
})


