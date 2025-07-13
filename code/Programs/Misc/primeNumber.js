//Number should be dividiblr by itslef and 1
function isPrime(num) {
  if (num <= 1) return null;

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(isPrime(4));
console.log(isPrime(5));
console.log(isPrime(8));
console.log(isPrime(13));
