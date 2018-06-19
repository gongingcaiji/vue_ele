var cors =require('cors');
var path = require('path');
var logger = require('morgan');
var express = require('express');
var home = require('./routes/home');
var createError = require('http-errors');
var cookieParser = require('cookie-parser');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var registerRouter = require('./routes/register');
var app = express();

//mongodb数据库
// 渲染引擎设置
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
//中间件配置
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, './public')));
//cros跨域插件中间件
app.use(cors({
  "origin":["http://localhost:8001"],
  "credentials":true,
  "methods":"GET,POST",
  "allowedHeaders":['Content-Type','Authorization']
}))
//做响应
app.use('/', indexRouter);
app.use('/home', home);
app.use('/users', usersRouter);
app.use('/register', registerRouter);



// 处理错误的
app.use(function(req, res, next) {
  next(createError(404));
});

// 抛出错误
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
