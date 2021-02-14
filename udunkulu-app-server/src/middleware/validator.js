const User = require('../api/models/user.model');

module.exports = (req, res, next) => {
  const { email, password } = req.body;
  if (!email) {
    return res.status(400).json({
      error: 'Email is required',
    });
  }
  if (!password) {
    return res.status(400).json({
      error: 'Password is required',
    });
  }
  return User.findOne({
    email,
  }).then((user) => {
    if (user) {
      return res.status(400).json({
        error: 'User with same email already exist',
      });
    }
    return next();
  });
};
