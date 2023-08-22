// 3) Create a function that receives two numbers and shows the prime numbers between them (it includes both number)

function primeNumbersBetween(num1, num2) {
  const result = [];

  for (let i = num1; i <= num2; i += 1) {
    // Negative numbers, 0 and 1 are not prime numbers.
    if (i <= 1) {
      i += 1;
    }

    // 2, 3, 5 and 7 are prime numbers because they are divisible by 1 and itself. These are an exception to the next rule.
    if (i === 2 || i === 3 || i === 5 || i === 7) {
      result.push(i);
    }

    // At this point (number > 7), we assume every number is divisible by 1 and itself, so we need to checkout if it is divisible by another one.
    if (i % 2 !== 0 && i % 3 !== 0 && i % 5 !== 0 && i % 7 !== 0) {
      result.push(i);
    }
  }

  return result.join();
}

console.log(primeNumbersBetween(1, 37));
