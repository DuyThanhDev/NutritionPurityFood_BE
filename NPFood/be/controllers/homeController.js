const Banner = require('../models/Banner');
const About = require('../models/About');
const Product = require('../models/Product');

// Banner CRUD
exports.addBanner = async (req, res) => {
  const { imageUrl, description } = req.body;
  const banner = new Banner({ imageUrl, description });
  await banner.save();
  res.status(201).json(banner);
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
  const products = await Product.find({ _id: { $in: req.body.bestProducts } });
  res.json(products);
};
