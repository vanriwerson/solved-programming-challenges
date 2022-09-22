const isPrimeNumber = (num) => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
};

// console.log(isPrimeNumber(383)); // returns true
// console.log(isPrimeNumber(484)); // returns false

module.exports = isPrimeNumber;
