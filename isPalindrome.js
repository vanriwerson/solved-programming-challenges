const isPalindrome = (str) => {
  const reverseStr = str.split('').reverse();
  
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] !== reverseStr[i]) {
      return false;
    }
  }

  return true;
};

// console.log(isPalindrome('482284')); // returns true
// console.log(isPalindrome('482584')); // returns false

module.exports = isPalindrome;
