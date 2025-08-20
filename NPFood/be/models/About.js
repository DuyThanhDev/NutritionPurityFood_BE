const mongoose = require('mongoose');

const aboutSchema = new mongoose.Schema({
  imageUrl: { type: String },
  content: { type: String },
  brands: [{ name: String, description: String }],
  bestProducts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
});

module.exports = mongoose.model('About', aboutSchema);
