'use strict';

const budget = [
  { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
  { value: -45, description: 'Groceries 🥑', user: 'jonas' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
  { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
];

const spendingLimits = Object.freeze({
  jonas: 1500,
  matilda: 100,
});

const getLimit = (limits, user) => (limits[user] ? limits[user] : 0);

// pure function
const addExpence = function (
  state,
  limits,
  value,
  description,
  user = 'jonas'
) {
  const lowerCaseUser = user.toLowerCase();
  return value <= getLimit(limits, lowerCaseUser)
    ? [...state, { value: -value, description, user: lowerCaseUser }]
    : state;
};

const newBudget1 = addExpence(budget, spendingLimits, 10, 'Pizza 🍕');
const newBudget2 = addExpence(
  newBudget1,
  spendingLimits,
  100,
  'Going to movies 🍿',
  'Matilda'
);
const newBudget3 = addExpence(newBudget2, spendingLimits, 200, 'Stuff', 'Jay');
console.log(newBudget1);
console.log(newBudget2);
console.log(newBudget3);

const checkExpences = function (state, limits) {
  return state.map(entry =>
    entry.value < -getLimit(limits, entry.user)
      ? { ...entry, flag: 'limit' }
      : entry
  );
};

const finalBudget = checkExpences(newBudget3, spendingLimits);
console.log(finalBudget);

const logBigExpences = function (state, limit) {
  // let output = '';
  const bigExpenses = state
    .filter(entry => entry.value <= -limit)
    .map(element => element.description.slice(-2))
    .join(' / ');
  // .reduce(
  //   (output, entry) => (output += `${entry.description.slice(-2)} /`),
  //   ''
  // );

  console.log(bigExpenses);
};

logBigExpences(finalBudget, 500);
