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

///////////////////////////////////////////////
// top level await keyword in modules
console.log('Start fetching');
const responce = await fetch('https://restcountries.com/v3.1/name/usa');
const data = await responce.json();
console.log(data[0]);
console.log('End of fetching');

// get last post
const lastPostData = async function () {
  const responce = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await responce.json();
  // console.log(data.at(-1).title);
  return { title: data.at(-1).title, text: data.at(-1).body };
};

// async function returns promice so we have to unpack it
console.log(await lastPostData());
