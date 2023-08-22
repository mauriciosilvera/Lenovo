// 2) Create a function that receives a String as parameter and returns a Boolean value indicating if the word is a palindrome or not.

function isPalindrome(str) {
  // Convert the string to lowercase and remove non-alphanumeric characters
  const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');

  // Compare the cleaned string with its reverse
  const reversedStr = cleanStr.split('').reverse().join('');

  return cleanStr === reversedStr;
}

console.log(isPalindrome('5Level5'));
