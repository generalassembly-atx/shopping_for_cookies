var express = require('express');
var router = express.Router();
var Product = require('../models/product');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { products: Product.all });
});

router.post('/cart', function(req, res, next) {
  // How do we add an item to the cart?
  var cookieObject = parseInt(req.body.id);
  var product = Product.find(cookieObject);
  console.log(product);
  req.session.cart.push(product);
  // session.product = response;
  res.redirect('/');

});

router.delete('/cart', function(req, res, next) {
  // How can we remove an item from the cart?
});

module.exports = router;
