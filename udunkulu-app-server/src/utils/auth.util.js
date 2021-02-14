const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.jwtToken = {
  createToken({ id, email }) {
    return jwt.sign({ id, email }, process.env.secretKey);
  },
  varifyToken(token) {
    return jwt.verify(token, process.env.secretKey);
  },
};

exports.hashPassword = (password) => bcrypt.hashSync(password, 10);

exports.comparePassword = (password, hash) => bcrypt.compare(password, hash);
