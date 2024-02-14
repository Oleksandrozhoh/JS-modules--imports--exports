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

const spendingLimits = {
  jonas: 1500,
  matilda: 100,
};

const getLimit = user => (spendingLimits[user] ? spendingLimits[user] : 0);

const addExpence = function (value, description, user = 'jonas') {
  user = user.toLowerCase();
  value <= getLimit(user) && budget.push({ value: -value, description, user });
};

addExpence(10, 'Pizza 🍕');
addExpence(100, 'Going to movies 🍿', 'Matilda');
addExpence(200, 'Stuff', 'Jay');
console.log(budget);

const checkExpences = function () {
  budget.forEach(entry => {
    entry.value < -getLimit(entry.user) && (entry.flag = 'limit');
  });
};
checkExpences();

console.log(budget);

const logBigExpences = function (limit) {
  let output = '';
  for (const entry of budget) {
    entry.value <= -limit && (output += `${entry.description.slice(-2)} / `); // Emojis are 2 chars
  }
  output = output.slice(0, -2); // Remove last '/ '
  console.log(output);
};

logBigExpences(500);
