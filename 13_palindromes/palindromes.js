const palindromes = function (palindrome) {
  const abc = "abcdefghijklmnñopqrstuvwxyz";
  const num = "123456789";

  let arrayPal = palindrome.toLowerCase()
                           .split("")
                           .filter((pa) => abc.includes(pa) || num.includes(pa));
  
  let strPal = arrayPal.join("");
  let reverseStrPal = arrayPal.reverse().join("");

  console.log(strPal + " " + reverseStrPal);

  if (strPal === reverseStrPal) {
    return true;
  } else {
    return false;
  };
};

// Do not edit below this line
module.exports = palindromes;
