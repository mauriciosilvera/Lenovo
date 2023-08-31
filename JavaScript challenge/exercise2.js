// 2) Create a function that receives a String as parameter and returns a Boolean value indicating if the word is a palindrome or not.

function isPalindrome(str) {
  // Convert the string to lowercase and remove non-alphanumeric characters
  const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');

  // Compare the cleaned string with its reverse
  const reversedStr = cleanStr.split('').reverse().join('');

  return cleanStr === reversedStr;
}

function isPalindromeWithoutMethods(str) {
  let forwards = '';
  let backwards = '';

  for (let i = 0; i < str.length; i += 1) {
    forwards += str[i].toLowerCase();
  }

  for (let j = str.length - 1; j >= 0; j -= 1) {
    backwards += str[j].toLowerCase();
  }

  return forwards === backwards;
}

console.log(isPalindromeWithoutMethods('Refer'));
