const mongoose = require('mongoose');

const ContactInfoSchema = new mongoose.Schema({
  factory_address: { type: String, required: true },
  office_address: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  website: { type: String, required: true },
  tax_code: { type: String, default: null },
  google_map_iframe: { type: String, default: null },
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('ContactInfo', ContactInfoSchema, 'contact_info');
