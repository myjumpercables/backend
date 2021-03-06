var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/login');
var createAccountRouter = require('./routes/create-account');
var requestsRouter = require('./routes/requests');
var repairRouter = require('./routes/repair');
var servicesRouter = require('./routes/services');
var carsRouter = require('./routes/cars');
var manageAccountRouter = require('./routes/manageAccount');
var getUserRequestsRouter = require('./routes/getUserRequests');
var requestsRouter = require('./routes/requests');
var updatePasswordRouter = require('./routes/updatePassword');

var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});

app.use(function(req, res, next) {
  console.log(req.headers);
  console.log(req.cookies);
  console.log(req.body);
  next();
});


// app.get('/', function(req, res, next) {
//
// });
//
// app.post('/', function(req, res, next) {
//  // Handle the post for this route
// });

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/login', loginRouter);
app.use('/create-account', createAccountRouter);
app.use('/requests',requestsRouter);
app.use('/repair',repairRouter);
app.use('/services',servicesRouter);
app.use('/cars',carsRouter);
app.use('/manage-account', manageAccountRouter);
app.use('/get-user-requests', getUserRequestsRouter);
app.use('/requests', requestsRouter);
app.use('/update-password', updatePasswordRouter);

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
