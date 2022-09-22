const fetchPI = async (digits) => {
  const ENDPOINT = `https://api.pi.delivery/v1/pi?start=0&numberOfDigits=${digits}`;
  const response = await fetch(ENDPOINT);
  const data = response.json();

  return data;
}

getPI = async (digits) => await fetchPI(digits);
console.log(getPI(10));

module.exports = getPI;