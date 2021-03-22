//LeetCode 541. Reverse String II 'EASY'
// Given a string s and an integer k, reverse the first k characters for every 2k characters counting from the start of the string.
// If there are fewer than k characters left, reverse all of them. 
///If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and leave the others as original.
// Example 1:
// Input: s = "abcdefg", k = 2
// Output: "bacdfeg"
// Example 2:
// Input: s = "abcd", k = 2
// Output: "bacd"
// Constraints:
// 1 <= s.length <= 104
// s consists of only lowercase English letters.
// 1 <= k <= 104

const reverseString = (s, k) => {
  let res = ''
  for(let i = 0; i <= s.length; i += 2 * k) {
    res += s.substr(i, k).split('').reverse().join('')
    res += s.substr(i+k, k)
  }
  return res
}

console.log(reverseString("abcdefg", 2))// 'bacdfeg'
console.log(reverseString("abcd", 2))// 'bacd'