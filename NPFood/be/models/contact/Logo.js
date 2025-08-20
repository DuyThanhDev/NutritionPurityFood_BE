const mongoose = require('mongoose');

const ContactLogoSchema = new mongoose.Schema({
  logo_url: { type: String, required: true },
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('ContactLogo', ContactLogoSchema, 'contact_logo');
