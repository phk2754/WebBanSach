const express = require('express');
const router = express.Router();
const User = require('../app/models/User')
const userController = require('../app/controllers/UserController');


router.get('/register', userController.register);
router.get('/login', userController.login);
router.post('/created', userController.created);
router.get('/logined', userController.logined);
module.exports = router; 
