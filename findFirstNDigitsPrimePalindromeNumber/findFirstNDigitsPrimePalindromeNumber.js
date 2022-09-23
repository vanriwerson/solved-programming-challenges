// Qual o primeiro número Primo Palíndromo de N dígitos
// encontrado na expansão decimal do número Pi (3,1415...)?

const oneMillionDigitsPI = require('./oneMillionDigitsPI');
const hundredBillionDigitsPI = require('./hundredBillionDigitsPI');

const isPrimeNumber = require('../isPrimeNumber');

const isPalindrome = require('../isPalindrome');

const findFirstNDigitsPrimePalindromeNumber = (searchSrc, strLen) => {
  for (let finalCharPosition = strLen; finalCharPosition <= searchSrc.length; finalCharPosition += 1) {
    const initialCharPosition = finalCharPosition - strLen;
    const substr = searchSrc.toString().substring(initialCharPosition, finalCharPosition);
    const num = Number(substr);

    const testPrimeNumber = isPrimeNumber(num);
    const testPalindrome = isPalindrome(substr);

    // Este log é opcional. This log is optional.
    console.log(`charAt: ${initialCharPosition}, testStr: ${substr}, prime: ${testPrimeNumber}, palindrome: ${testPalindrome}`);

    if (testPrimeNumber && testPalindrome) {
      return `O número procurado é: ${substr}, iniciando na posição ${initialCharPosition}`;
      // return `The seeked number is: ${substr}, starting at position ${initialCharPosition}`;
    }
  }

  return `Não encontrado em ${searchSrc.length} caracteres.`;
  // return `Not found in ${searchSrc.length} characters.`;
}

console.log(findFirstNDigitsPrimePalindromeNumber(oneMillionDigitsPI, 3)); // returns 383
// console.log(findFirstNDigitsPrimePalindromeNumber(piDecimalExpansion, 5)); // returns 38183
// console.log(findFirstNDigitsPrimePalindromeNumber(piDecimalExpansion, 9)); // returns 318272813 takes a long time XD
console.log(findFirstNDigitsPrimePalindromeNumber(hundredBillionDigitsPI, 21)); // returns 
