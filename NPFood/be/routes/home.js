const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');
const auth = require('../middleware/auth');

// Banner CRUD
router.get('/banner', homeController.getBanners);
router.post('/banner', auth, homeController.createBanner);
router.put('/banner/:id', auth, homeController.updateBanner);
router.delete('/banner/:id', auth, homeController.deleteBanner);

// About CRUD
router.get('/about', homeController.getAbout);
router.put('/about/:id', auth, homeController.updateAbout);

// Best Products
router.get('/best-products', homeController.getBestProducts);
router.put('/best-products', auth, homeController.setBestProducts);

module.exports = router;
