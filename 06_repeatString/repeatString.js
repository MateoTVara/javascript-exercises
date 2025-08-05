const repeatString = function(str, times) {
  let strToReturn = "";
  for (let i = 0; i < times; i++) strToReturn += str;
  return times < 0 ? "ERROR" : strToReturn;
};

// Do not edit below this line
module.exports = repeatString;
