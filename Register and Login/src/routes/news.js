const express = require('express');
const router = express.Router();

const newController = require('../app/controllers/NewController');


router.get('/news', newController.index);

module.exports = router; 
