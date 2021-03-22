//LeetCode 345. Reverse Vowels of a String 'EASY'
// Write a function that takes a string as input and reverse only the vowels of a string.
// Example 1:
// Input: "hello"
// Output: "holle"
// Example 2:
// Input: "leetcode"
// Output: "leotcede"
// Note:
// The vowels does not include the letter "y".

//to run the file: $ node reverseVowels.js

const reverseVowels = (s) => {
  let chars = s.split('')
  let left = 0;
  let right = chars.length - 1; 
  let vowels = ['a','e','i','o','u','A','E','I','O','U']
  let temp;

  while(left < right) {
    while(left < right && !vowels.includes(chars[left])){
      left++;
    }
    while(left < right && !vowels.includes(chars[right])){
      right--;
    }
    temp = chars[left];
    chars[left] = chars[right];
    chars[right] = temp;
    left++;
    right--
  }
  return chars.join('')
}

console.log(reverseVowels('hello'))//'holle'
console.log(reverseVowels('leetcode'))//'leotcede'