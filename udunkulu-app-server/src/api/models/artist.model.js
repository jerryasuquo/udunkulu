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
  name: {
    type: String,
    require: true,
  },
  details: {
    type: String,
    required: true,
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
