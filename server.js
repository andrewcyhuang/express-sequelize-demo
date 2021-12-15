const express = require('express');
const indexRouter = require('./routes/index');
const authorsRouter = require('./routes/authors');
const expressLayouts = require('express-ejs-layouts');
const { sequelize } = require('./models');

if (process.env.NODE_ENV !== 'production')
  require('dotenv').config();

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
app.use('/authors', authorsRouter);


app.listen(process.env.PORT || 3000, async () => {
  console.log(`Server listening on port: ${process.env.PORT || 3000}`);
  await sequelize.authenticate();
  console.log(`Database connected!`);
})