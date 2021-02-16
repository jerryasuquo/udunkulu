const User = require('../api/models/user.model');
const Artist = require('../api/models/artist.model');

module.exports = async (req, res, next) => {
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
  const user = await User.find({ email });
  const artist = await Artist.findOne({ email });
  const emailExist = user !== null && artist !== null;
  if (emailExist) {
    return res.status(400).json({
      success: false,
      error: 'User with same email already exist',
    });
  }

  return next();

  // return next();
  // return User.findOne({
  //   email,
  // }).then((user) => {
  //   if (user) {
  //     Artist.findOne({
  //       email,
  //     }).then((artist) => {
  //       if (artist) {
  //         return res.status(400).json({
  //           success: false,
  //           error: 'User with same email already exist',
  //         });
  //       }
  //       return next();
  //     });
  //   }
  //   return next();
  // });
};
