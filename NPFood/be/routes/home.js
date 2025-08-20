const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');
const auth = require('../middleware/auth');

// Banner
router.post('/banner', auth, homeController.addBanner);
router.put('/banner/:id', auth, homeController.updateBanner);
router.delete('/banner/:id', auth, homeController.deleteBanner);

// About
router.get('/about', homeController.getAbout);
router.put('/about', auth, homeController.updateAbout);

// Best Products
router.post('/best-products', homeController.getBestProducts);

module.exports = router;
