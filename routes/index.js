var express = require('express');
var router = express.Router();
var Product = require('../models/product');
var session = require('express-session');

/* GET home page. */
router.get('/', function(req, res, next) {
  var products = Product.all;
  var productObj = Product;
  res.render('index', { products: products });
});

router.post('/cart', function(req, res, next) {
  var curSession = req.session.cart;
  var cartId = parseInt(req.body.id);
  var product = Product.find(cartId);

  console.log(product.name);
  curSession.push(cartId);
  res.redirect('/');
});

router.delete('/cart', function(req, res, next) {
  // How can we remove an item from the cart?
});

module.exports = router;
