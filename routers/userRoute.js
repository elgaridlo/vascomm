const express = require('express');

const authController = require('../controllers/authController')
const userController = require('../controllers/userController')

const router = express.Router();

router.route('/signup').post(authController.signup);
router.route('/login').post(authController.login);

router.use(authController.restrictTo('admin'));

router.route('/').get(userController.getAll);

module.exports = router;