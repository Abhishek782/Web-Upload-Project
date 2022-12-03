const jwt = require('jsonwebtoken');
const cookie = require('cookie-parser')
const User = require('../models/userModel')


const loginrequired =async (req,res,next)=>{
    const token = req.cookies['access-token']
    if(token){
        const validatetoken = await jwt.verify(token,process.env.JWT_SECRET);
        if(validatetoken)
        {
            res.user = validatetoken.id
            next()
        }
        else{
            console.log('token expired');
             res.redirect('/user/login');

        }
    }
    else{
        console.log('token not found');
        res.redirect('/user/login');
    }
}


const verifyEmail = async(req,res,next)=>{
    try{
        const user = await User.findOne({email: req.body.email})
        if(user.isVerified){
            next()
        }
        else{
            console.log("Please check your mail to verify your mail account ");
        }
    }
    catch(err)
    {
        console.log(err);
    }
}

module.exports = {loginrequired, verifyEmail}