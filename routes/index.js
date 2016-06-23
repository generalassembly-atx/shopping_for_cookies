var express = require('express');
var router = express.Router();
var Product = require('../models/product');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { products: Product.all });
});

router.post('/cart', function(req, res, next) {
  var temp = parseInt(req.body.id);
  var product = Product.find(temp);
  req.session.cart.push(product);
  res.redirect('/');
  // console.log(product);
  // How do we add an item to the cart?
});

router.delete('/cart', function(req, res, next) {
  // How can we remove an item from the cart?
  var temp = parseInt(req.body.id);
  // cart.delete(temp);

  res.redirect('/');
});

// router.delete('/:id', function(req, res, next){
//   var index = parseInt(req.params.id) - 1;
//   Joke.delete(index);
//   res.redirect('/jokes');
// });

module.exports = router;
