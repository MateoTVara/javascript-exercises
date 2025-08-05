const sumAll = function(a, b) {
  if (!Number.isInteger(a) || !Number.isInteger(b)) return 'ERROR';
  if (a < 0 || b < 0) return 'ERROR';
  if (a > b){
    const temp = a;
    a = b;
    b = temp;
  }

  let sum = 0;
  for (a; a <= b; a++) sum += a;
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
