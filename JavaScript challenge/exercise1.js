// 1) Create a function that receives an array of positive integers and returns an array with only the input’s pair numbers.

function pairNumbers(arr) {
  const result = [];
  let resultIndex = 0;

  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] % 2 === 0) {
      // here i could use .push() method but i understand that array methods are not allowed.
      result[resultIndex] = arr[i];
      resultIndex += 1;
    }
  }

  return result;
}

console.log(pairNumbers([1, 2, 3, 4]));
