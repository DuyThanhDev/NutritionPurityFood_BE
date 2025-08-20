const mongoose = require('mongoose');

const HomeFeaturedProductSchema = new mongoose.Schema({
  product_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  position: { type: Number, required: true },
});

module.exports = mongoose.model('HomeFeaturedProduct', HomeFeaturedProductSchema, 'home_featured_products');
