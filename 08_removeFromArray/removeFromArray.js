const removeFromArray = function(arr, ...pop) {
  let filtered = arr.filter((val) => !pop.includes(val));
  return filtered;
};

// Do not edit below this line
module.exports = removeFromArray;
