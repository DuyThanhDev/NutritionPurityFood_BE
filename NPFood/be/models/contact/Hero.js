const mongoose = require('mongoose');

const ContactHeroSchema = new mongoose.Schema({
  image_url: { type: String, required: true },
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('ContactHero', ContactHeroSchema, 'contact_hero');
