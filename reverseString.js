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

  while(left < right) {
    temp = chars[left];
    chars[left] = chars[right];
    chars[right] = temp;
    left++;
    right--;
  }
  return chars.join('')
}

console.log(reverseString("hello")) //"olleh"