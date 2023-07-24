const path = require('path');

const express = require('express');

const productsController = require('../controllers/success');


const router = express.Router();

router.get('/contactus', productsController.contactus);

module.exports = router;
