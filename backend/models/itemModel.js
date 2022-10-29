const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({

  text: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Item', ItemSchema);