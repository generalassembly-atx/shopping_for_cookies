# Cookie Shopping Cart

## Description
We're going to build a shopping cart that allows us to buy different types of cookies and add them to our cart. A user should be able to click on the "Add to Cart" button for each cookie to add the cookie to their cart. When the page is refreshed, the cookies should remain in the cart. You should be able to see the number of items in the cart, as well as a list of the item names. The shopping cart should be specific to each user, and not be stored globally for everyone!

## Tips
- Fork and `git clone` the repo as usual
- `npm install` inside the repo
- There are comments in the code to help you out as you're working
- The only files you should need to work in are `app.js`, `routes/index.js`, and `views/index.ejs`. A `models/product.js` file has already been created for you that has products seeded to be displayed on the page.
- When you run `nodemon` the first time, it won't work. There's an error on line 7 of `routes/index.js` preventing it from running properly.


## Bonus
Allow users to remove items from the shopping cart with a button next to each item in the list. You'll probably need to use the [method override](https://github.com/expressjs/method-override) module (which is already installed) to get a "delete" method working.

## Licensing
All content is licensed under a CC­BY­NC­SA 4.0 license.
All software code is licensed under GNU GPLv3. For commercial use or alternative licensing, please contact legal@ga.co.
