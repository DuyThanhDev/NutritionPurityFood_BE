const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const auth = require('../middleware/auth');

router.post('/login', adminController.login);
router.post('/', auth, adminController.create);
router.put('/:id', auth, adminController.update);

module.exports = router;
