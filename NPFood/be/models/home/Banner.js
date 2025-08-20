const mongoose = require('mongoose');

const HomeBannerSchema = new mongoose.Schema({
  image_url: { type: String, required: true },
  title: { type: String, default: null },
  link: { type: String, default: null },
  position: { type: Number, default: 0 },
  status: { type: Number, default: 1 },
});

module.exports = mongoose.model('HomeBanner', HomeBannerSchema, 'home_banners');
