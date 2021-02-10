const mongoose = require('mongoose');
const vars = require('./vars');
const logger = require('./logger');

const dbUrl = vars.NODE_ENV === 'development'
  ? vars.dbUrlDev : vars.dbUrlProd;

mongoose.connect(dbUrl, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

mongoose.connection.on('connected', () => {
  console.log('Database connected');
});

mongoose.connection.on('reconnected', () => {
  console.log('Database has reconnected');
});

mongoose.connection.on('error', (err) => {
  logger.error(`MongoDB connection error: ${err}`);
  process.exit(-1);
});

mongoose.connection.on('disconnected', () => {
  console.log('Database disconnected');
});
