const mongoose = require('mongoose');

const HomeAboutSchema = new mongoose.Schema({
  image_url: { type: String, default: null },
  content: { type: String, required: true },
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('HomeAbout', HomeAboutSchema, 'home_about');
