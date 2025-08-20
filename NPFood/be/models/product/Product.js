const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  mainImage: { type: String, required: true },
  images: [{ type: String }],
  description: { type: String, required: true },
  price: { type: String, required: true },
  ingredients: { type: String, required: true },
  appearance: { type: String, required: true },
  taste: { type: String, required: true },
  instructions: [{ type: String }],
  isBest: { type: Boolean, default: false },
});

module.exports = mongoose.model('Product', ProductSchema, 'products');
