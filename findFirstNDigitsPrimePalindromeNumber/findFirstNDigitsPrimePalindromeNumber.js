// Qual o primeiro número Primo Palíndromo de N dígitos
// encontrado na expansão decimal do número Pi (3,1415...)?

const piDecimalExpansion = require('./piDecimalExpansion');

const isPrimeNumber = require('../isPrimeNumber');

const isPalindrome = require('../isPalindrome');

const findFirstNDigitsPrimePalindromeNumber = (searchSrc, len) => {
  for (let strLen = len; strLen < searchSrc.length; strLen += 1) {
    const initialChar = strLen - len;
    const substr = searchSrc.toString().substring(initialChar, strLen);
    const num = Number(substr);

    const testPrimeNumber = isPrimeNumber(num);
    const testPalindrome = isPalindrome(substr);

    // Este log é opcional. This log is optional.
    console.log(`charAt: ${initialChar}, testStr: ${substr}, prime: ${testPrimeNumber}, palindrome: ${testPalindrome}`);

    if (testPrimeNumber && testPalindrome) {
      return `O número procurado é: ${substr}, iniciando na posição ${initialChar}`;
      // return `The seeked number is: ${substr}, starting at position ${initialChar}`;
    }
  }

  return `Não encontrado em ${searchSrc.length} caracteres.`;
  // return `Not found in ${searchSrc.length} characters.`;
}

console.log(findFirstNDigitsPrimePalindromeNumber(piDecimalExpansion, 3)); // returns 383
console.log(findFirstNDigitsPrimePalindromeNumber(piDecimalExpansion, 5)); // returns 38183
// console.log(findFirstNDigitsPrimePalindromeNumber(piDecimalExpansion, 9)); // returns 318272813 takes a long time XD
