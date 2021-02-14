const moment = require('moment');
const User = require('../models/user.model');
const authenticate = require('../../utils/auth.util');

function generateTokenResponse(accessToken) {
  const tokenType = 'Bearer';
  const expiresIn = moment().add(3600, 'minutes');
  return {
    tokenType,
    accessToken,
    expiresIn,
  };
}

exports.signup = async (req, res, next) => {
  try {
    const {
      fullname, email, password,
    } = req.body;
    const hash = authenticate.hashPassword(password);
    const user = User.create({
      fullname,
      email,
      password: hash,
    });
    const { _id } = user;
    res.statusCode = 201;
    res.setHeader('Content-Type', 'application/json');
    res.json({
      success: true,
      message: 'Registration Successful!',
      user: { _id, email },
    });
  } catch (error) {
    next(error);
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({
      email,
    });
    if (
      user
      && authenticate.comparePassword(password, user.password)
    ) {
      const token = authenticate.jwtToken.createToken(user);

      const responseToken = generateTokenResponse(token);
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json({
        success: true,
        message: 'Login Succesfully',
        responseToken,
      });
    } else {
      res.statusCode = 400;
      res.send({
        message: 'Invalide Email/Password',
      });
    }
  } catch (error) {
    next(error);
  }
};

exports.logout = async (req, res) => {
  delete req.session;
  req.logout();
  return res.redirect('/');
};
