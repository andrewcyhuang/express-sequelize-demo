const express = require('express');
const indexRouter = require('./routes/index');
const userRouter = require('./routes/users');
const expressLayouts = require('express-ejs-layouts');

if (process.env.NODE_ENV !== 'production')
  require('dotenv').parse();

const logger = (req, res, next) => {
  console.log(req.originalUrl)
  next()
}

const app = express();
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.set('layout', 'layouts/layout');
app.use(expressLayouts);
app.use(express.static('public'));
app.use(logger);
app.use(express.urlencoded({ extended: true }))

app.use('/', indexRouter);
app.use('/users', userRouter);

app.listen(process.env.PORT || 3000)