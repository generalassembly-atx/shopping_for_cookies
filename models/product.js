function Product(options) {
  this.id = Product.all.length + 1;
  this.name = options['name'];
  this.image = options['image'];
  this.description = options['description'];
  Product.all.push(this);
  Product.push(cart);
}

Product.find = function(id) {
  return Product.all.find(function(product) {
    return product.id === id;
  });
}

Product.all = [
  {
    id: 1,
    name: "Chocolate Chip",
    image: "http://images.edge-generalmills.com/00bf209f-08c8-455a-a930-76a617a45fa1.jpg",
    description: "Om nom nom"
  },
  {
    id: 2,
    name: "Oatmeal Raisin",
    image: "https://21nogluten.files.wordpress.com/2012/01/oatmealraising.jpg",
    description: "Camille's favorite"
  },
  {
    id: 3,
    name: "Double Chocolate",
    image: "http://images.edge-generalmills.com/74d8ee3c-534a-425b-9005-abb858427bf7.jpg",
    description: "DOUBLE om nom nom"
  },
  {
    id: 4,
    name: "Vanilla",
    image: "https://www.bigelowtea.com/Store/img/recipes/des-vanilla-drop-cookies.jpg",
    description: "Booooorinnggggg"
  },
  {
    id: 5,
    name: "Black and White",
    image: "http://www.browneyedbaker.com/wp-content/uploads/2013/04/black-white-cookies-23-600.jpg",
    description: "Like 2 cookies in 1"
  }
];

module.exports = Product;
