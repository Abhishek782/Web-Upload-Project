const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/userModel')
const {loginrequired} = require('../config/JWT')

router.get('/',(req,res)=>{
    res.render('index');
})

router.get('/dashboard',loginrequired,(req,res)=>{
    res.render('dashboard')
})

router.get('/home',loginrequired,(req,res)=>{
    // console.log(res.user);
    const _id=res.user;
    const curr_user = User.findOne({_id}).then((msg) => {
        res.render('home',{name : msg.name});
        
    }).catch((err) => {
        console.log(err);
    });
    // console.log(curr_user);
})

router.get('/logout',(req,res)=>{
    res.cookie('access-token',"",{maxAge: 1 })
    res.redirect('/user/login');
})

module.exports = router; 