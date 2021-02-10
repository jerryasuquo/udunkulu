const mongoose = require('mongoose');

// const gender = ['male', 'female', 'not specified'];
// const subscription = ['free trial', 'lite', 'premium'];

const userSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
    maxlength: 16,
  },
  email: {
    type: String,
    match: /^\S+@\S+\.\S+$/,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  // gender: {
  //   type: String,
  //   enum: gender,
  //   default: 'not specified',
  // },
  // age: Number,
  // subscription: {
  //   type: String,
  //   enum: subscription,
  //   default: 'free trial',
  // },
  password: {
    type: String,
    required: true,
  },
},
{
  timestamps: true,
});

module.exports = mongoose.model('User', userSchema);
