/*
Live Code Challenge completed with Nick 3/24/21, given choice of language and platform
opted for javascript and codeSandBox so he could type too

1. Return a string so that it is sorted alphabetically
assumptions: all lowercase and no special characters
*/

const alphabeticalSort = (s) => {
  return s.split('').sort().join('')
}

console.log(alphabeticalSort("cbsgdafer"))//abcdefgrs

/*
2. Now your function takes in a second argument with a custom alphabet.
  same assumptions apply, all lowercase and no special characters, the alphabet does not repeat characters
  also, the alphabet is an array
  */

//My Solve
// const alphabeticalSortTwo = (s, alphabet) => {
//   let arr = s.split('')
//   return arr
//     .sort((a,b) => {return alphabet.indexOf(a) - alphabet.indexOf(b)})
//     .join('')
// }

//Nick's Solve
const alphabeticalSortTwo = (s, alphabet) => {
  return s.split('')
    .sort((a,b) => {return alphabet.indexOf(a) - alphabet.indexOf(b)})
    .join('')
}

console.log(alphabeticalSortTwo("abcdebebdca", "badcfeghijklmnopqrstuvwxyz".split('')))