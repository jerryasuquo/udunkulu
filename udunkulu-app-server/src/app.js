const createError = require('http-errors');
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

dotenv.config();

const app = express();
const corsOptions = {
  origin: '*',
};

app.use(logger('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors(corsOptions));
app.use(compression());
app.use(helmet());

// routes
const usersRouter = require('./api/routes/user.route');
const indexRouter = require('./api/routes/index.route');
const artistRouter = require('./api/routes/artist.route.js');

app.use('/api/v1/user', usersRouter);
app.use('/api/v1/artist', artistRouter);

// wildcart route
app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// db
require('./config/mongod');

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
// eslint-disable-next-line no-unused-vars
app.use((error, req, res, next) => {
  console.log(error);
  res.status(500).json({
    success: false,
    message: error.message,
  });
});

module.exports = app;
