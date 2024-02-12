// Exporting module
console.log('// Exporting module');

const shipCost = 10;
const cart = [];
const serialNum = `00000000001`;

export const addToCart = function (product, qty) {
  cart.push({ product, qty });
  console.log(`${qty} of ${product} have been pushed to the cart`);
};

export { shipCost, cart };

export default 23;
