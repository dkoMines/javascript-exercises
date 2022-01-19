const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(a) {
	return a.reduce( (total, num) => {
    return total += num;
  }, 0);
};

const multiply = function(a) {
	return a.reduce( (total, num) => {
    return total *= num;
  }, 1);
};

const power = function(a, b) {
	return a**b
};

const factorial = function(num) {
  total = 1
  for (let i=1;i<=num;i++) {
    total *= i;
  }
	return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
