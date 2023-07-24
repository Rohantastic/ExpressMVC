const path = require('path');

const express = require('express');

const productsController = require('../controllers/success');


const router = express.Router();
const app = [];
router.get('/success', productsController.successPage);

module.exports = router;
