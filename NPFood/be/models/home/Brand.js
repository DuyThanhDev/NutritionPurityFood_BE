const mongoose = require('mongoose');

const HomeBrandSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, default: null },
  logo_url: { type: String, default: null },
  status: { type: Number, default: 1 },
});

module.exports = mongoose.model('HomeBrand', HomeBrandSchema, 'home_brands');
