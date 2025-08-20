const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  imageUrl: { type: String },
  description: { type: String },
  isBest: { type: Boolean, default: false },
});

module.exports = mongoose.model('Product', productSchema);
