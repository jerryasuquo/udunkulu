const mongoose = require('mongoose');

const trackSchema = new mongoose.Schema({
  track: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Track',
  },
});

const albumSchema = new mongoose.Schema({
  album: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Album',
  },
});

const artistSchema = new mongoose.Schema({
  fullname: {
    type: String,
    require: true,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  stageName: {
    type: String,
  },
  category: { // TODO: add an enum field for ctegory
    type: String,
  },
  details: {
    type: String,
  },
  followers_count: {
    type: Number,
    default: 0,
  },
  tracks: [trackSchema],
  albums: [albumSchema],
},
{
  timestamps: true,
});

module.exports = mongoose.model('Artist', artistSchema);
