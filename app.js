var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const hbs=require("hbs");
var formRouter=require('./routes/formRouter');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const mongoose =require('mongoose');
const url = "mongodb://0.0.0.0:27017/DevPlace";
var FileStore=require('session-file-store');
var app = express();

const connect=mongoose.connect(url)
.then((db)=>{
  console.log("Connected correctly to the Server ");  
},(err)=>{
  console.log("Error occured while connecting...",err);
})

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
const template_path=path.join(__dirname,'views/HomePage')
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.set("view engine","hbs")
app.set("views",template_path);


app.use('/', indexRouter);
app.use('/form',formRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
