require('dotenv').config();

module.exports = {
  dbUrlProd: process.env.CONNECTION_STRING_PRODUCTION,
  dbUrlDev: process.env.CONNECTION_STRING_DEV,
  jwtSecret: process.env.secretKey,
  NODE_ENV: process.env.NODE_ENV,
};
