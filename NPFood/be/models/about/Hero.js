const mongoose = require('mongoose');

const AboutHeroSchema = new mongoose.Schema({
  image_url: { type: String, required: true },
  title: { type: String, default: null },
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('AboutHero', AboutHeroSchema, 'about_hero');
