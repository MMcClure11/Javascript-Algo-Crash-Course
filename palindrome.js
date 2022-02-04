// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// 1/11/22
// Direct solution
function palindrome(str) {
  return str.split("").reverse().join("") === str;
}

console.log(palindrome("meks")); // false
console.log(palindrome("abba")); // true

// 1/12/22
// Advanced array function
// This is not the ideal solution because it will do approx
// twice as much work as it needs to do. It checks the first with
// the last char, then second to second to last, etc.
// Then it checks the inverse going through the entire array.
// Not an efficient solution.
function palindrome2(str) {
  return str;
}

console.log(palindrome2("meks")); //false
console.log(palindrome2("abba")); //true

// to run file: node palindrome.js
