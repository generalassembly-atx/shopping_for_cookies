var express = require('express');
var router = express.Router();
var session = require('express-session');
var Product = require('../models/product');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { products: Product.all });
});

router.post('/cart', function(req, res, next) {
  // How do we add an item to the cart?
  var temp = parseInt(req.body.id);
  var product = Product.find(temp);
  req.session.cart.push(product);
  console.log(req.session.cart);
  res.redirect('/');
});

// router.get('/cart', function(req, res, next) {
//   res.render('cart', {products: products})
// })

router.delete('/cart', function(req, res, next) {
  // How can we remove an item from the cart?
});

module.exports = router;
