const Banner = require('../models/home/Banner');
const About = require('../models/home/About');
const Product = require('../models/product/Product');

// Banner CRUD
exports.getBanners = async (req, res) => {
  try {
    const banners = await Banner.find();
    res.json(banners);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};
exports.createBanner = async (req, res) => {
  try {
    const banner = new Banner(req.body);
    await banner.save();
    res.json(banner);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};
exports.updateBanner = async (req, res) => {
  try {
    const banner = await Banner.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(banner);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};
exports.deleteBanner = async (req, res) => {
  try {
    await Banner.findByIdAndDelete(req.params.id);
    res.json({ message: 'Deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.updateBanner = async (req, res) => {
  const { id } = req.params;
  const { imageUrl, description } = req.body;
  const banner = await Banner.findByIdAndUpdate(id, { imageUrl, description }, { new: true });
  res.json(banner);
};

exports.deleteBanner = async (req, res) => {
  const { id } = req.params;
  await Banner.findByIdAndDelete(id);
  res.json({ message: 'Banner deleted' });
};

// About CRUD
exports.getAbout = async (req, res) => {
  try {
    const about = await About.find();
    res.json(about);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};
exports.updateAbout = async (req, res) => {
  try {
    const about = await About.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(about);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};
exports.getAbout = async (req, res) => {
  const about = await About.findOne({}).populate('bestProducts');
  res.json(about);
};

exports.updateAbout = async (req, res) => {
  const { imageUrl, content, brands, bestProducts } = req.body;
  let about = await About.findOne({});
  if (!about) about = new About();
  about.imageUrl = imageUrl;
  about.content = content;
  about.brands = brands;
  about.bestProducts = bestProducts;
  await about.save();
  res.json(about);
};

// Best Products
exports.getBestProducts = async (req, res) => {
  try {
    const products = await Product.find({ isBest: true }).limit(3);
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};
exports.setBestProducts = async (req, res) => {
  try {
    await Product.updateMany({}, { isBest: false });
    await Product.updateMany({ _id: { $in: req.body.productIds } }, { isBest: true });
    res.json({ message: 'Updated best products' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};
exports.getBestProducts = async (req, res) => {
  const products = await Product.find({ _id: { $in: req.body.bestProducts } });
  res.json(products);
};
