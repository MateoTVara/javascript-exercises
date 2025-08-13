const add = function(a, b) {
	return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(arr) {    
  return arr.reduce((total, num) => total += num, 0);
};

const multiply = function(arr) {
  return arr.reduce((total, num) => total * num);
};

const power = function(a, b) {
	return a**b;
};

const factorial = function(f) {
	let factorial = 1;
  
  for (let i = f; i > 0; i--){
    factorial *= i;
  };

  return factorial;
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
