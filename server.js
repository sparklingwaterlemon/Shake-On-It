var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var methodOverride = require('method-override'); // npm i method-override
var session = require('express-session');
var passport = require('passport');


// Connect to our Database
require("dotenv").config(); //using dotenv to route our username&password to config->cloud
require("./config/database"); // connect to the database with Mongoose
require('./config/passport');



// Our Lovely Routers
var indexRouter = require('./1routes/index');
var userRouter = require('./1routes/user-routes/user');
var editRouter = require('./1routes/edit-router');








var app = express();
// View Engine Setup
app.set('views', path.join(__dirname, '4views'));
app.set('view engine', 'ejs');

// Middle-Ware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public'))); // ???

// Session
app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true
}));

// Passport
app.use(passport.initialize());
app.use(passport.session());



// Passport Middle-Ware
app.use(function (req, res, next) {
  res.locals.user = req.user;
  next();
});



// Middle-Ware - req.time 
app.use(function(req,res,next){
  req.time = new Date().toLocaleTimeString([], { hour12: false, hour: '2-digit', minute: '2-digit' });
  next();
});



// Middle-Ware - Routers
// https://localhost:3000/
app.use('/', indexRouter);
// https://localhost:3000/user
app.use('/user', userRouter);

// https://localhost:3000/
app.use('/', editRouter);








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
