const mongoose = require('mongoose');

const AboutFactorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  description: { type: String, default: null },
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('AboutFactory', AboutFactorySchema, 'about_factories');
