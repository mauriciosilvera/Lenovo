// 3) Create a function that receives two numbers and shows the prime numbers between them (it includes both number)

function isPrime(num) {
  // 0 and 1 are not prime numbers by definition.
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

function primeNumbersBetween(num1, num2) {
  const result = [];

  for (let i = num1; i <= num2; i += 1) {
    if (isPrime(i)) {
      result.push(i);
    }
  }

  return result.join();
}

console.log(primeNumbersBetween(1, 122));
