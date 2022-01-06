//Leet code 344. Reverse String 'EASY'
// Write a function that reverses a string. 
//The input string is given as an array of characters s.
// Example 1:
// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]
// Example 2:
// Input: s = ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]
// Constraints:
// 1 <= s.length <= 105
// s[i] is a printable ascii character.
// Follow up: Do not allocate extra space for another array. 
//You must do this by modifying the input array in-place with O(1) extra memory.

// const reverseString = (s) => {
//   return s.split('').reverse().join('')
// }

const reverseString = (s) => {
  let chars = s.split('')
  let left = 0;
  let right = chars.length - 1;
  let temp;

  while (left < right) {
    temp = chars[left];
    chars[left] = chars[right];
    chars[right] = temp;
    left++;
    right--;
  }
  return chars.join('')
}

console.log(reverseString("hello")) //"olleh"

// 1/4/21
// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  return str.split("").reverse().join("")
}

console.log(reverse("dude")) // "edud" 

// 1/5/21
function reverse2(str) {
  let reversed = ""
  for (const character of str) {
    reversed = character.concat(reversed)
  }
  return reversed
}

console.log(reverse2("meks")) // "skem"

// 1/6/21
function reverse3(str) {
  return str.split('').reduce((rev, char) => char + rev, '');
}

console.log(reverse3("newaperio")) // "oirepawen"

// to run file: node reverseString.js
