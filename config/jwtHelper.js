const jwt=require('jsonwebtoken');
module.exports.verifytoken=(req,res,next)=>{
    var token;
    if('authorization' in req.headers)
    {
        token=req.headers['authorization'].split(' ')[1];
        if(!token)
        {
            res.status(401).json({
                auth:false,
                message:'Token is not authorized'
            });
        }
        else{
            jwt.verify(token,"ABC1111",(err,user)=>{
                if(err)
                {
                    res.status(404).json({
                        auth:false,
                        message:'Token is not generated'
                    });
                }
                else{
                    _id=jwt.decode(token);
                    res.status(200).json({
                       auth:true,
                        data:_id,
                    });
                    //req._id=decoded._id;
                    //next();
                }
            })
        }
    }
}