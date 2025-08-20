const mongoose = require('mongoose');

const AboutCompanySchema = new mongoose.Schema({
  description: { type: String, required: true },
  established_year: { type: Number, default: null },
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('AboutCompany', AboutCompanySchema, 'about_company');
