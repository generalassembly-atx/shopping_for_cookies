var express = require('express');
var router = express.Router();
var Product = require('../models/product');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { products: Product.all});
});

router.post('/cart', function(req, res, next) {
var cookie = product.id;
  // How do we add an item to the cart?
});

router.delete('/cart', function(req, res, next) {
  // How can we remove an item from the cart?
});

module.exports = router;
