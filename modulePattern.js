//////////////////////////////////
// module pattern
const myModule = (function () {
  const name = 'alex';
  const age = '32';
  const city = 'chicago';

  const birthYear = function () {
    return 2024 - this.age;
  };

  return { name, age, birthYear };
})();

console.log(myModule.name);
console.log(myModule.birthYear());
console.log(myModule.city); // undefined
