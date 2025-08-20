const mongoose = require('mongoose');

const AboutCommitmentSchema = new mongoose.Schema({
  content: { type: String, required: true },
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('AboutCommitment', AboutCommitmentSchema, 'about_commitments');
