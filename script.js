// Importing module
// import { addToCart, cart } from './shoppingCart.js';
// console.log('// Importing module');

// addToCart('Chair', 2);

// console.log(cart);

//console.log(shipCost); // not accesible

// impport everything form
import * as shoppingCart from './shoppingCart.js';
shoppingCart.addToCart('table', 1);
console.log(shoppingCart.serialNum);
console.log(shoppingCart.cart);

import defaultValue from './shoppingCart.js';
console.log(defaultValue);
