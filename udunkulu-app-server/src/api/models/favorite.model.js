const mongoose = require('mongoose');

const favoriteSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    track: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Track',
    },
    artist: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Artist',
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model('Favorite', favoriteSchema);
