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

/*
Once it was over Nick had follow up questions:
  Why did you use the fat arrow function instead of the function keyword?
    I had gotten used to anonymous arrow functions in react because it helps with not having 
    to .bind(this) when accessing or updating state. From there it really became habit and 
    a stylistic choice that I prefer.
  Why did you use let instead of const? 
    Looking at in now, I should have used const, because I'm declaring a variable that won't
    change during it's life in the function. So to make it clear to other developers const
    would have been the better choice.
  What would happen if the string I gave it was a million characters long?
    The javascript sort function looks at each character once as it sorts it and so it would 
    have an O(n) runtime so if each sorting action was a second, it'd take 1 million seconds to 
    sort the string. 'Yeah! It'd be a linear runtime.'
*/

//Nick's Solve
const alphabeticalSortTwo = (s, alphabet) => {
  return s.split('')
    .sort((a,b) => {return alphabet.indexOf(a) - alphabet.indexOf(b)})
    .join('')
}

console.log(alphabeticalSortTwo("abcdebebdca", "badcfeghijklmnopqrstuvwxyz".split('')))

//Actual code from the codeSandbox
/*import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

// custom alphabet
//  — 26-char string
//  - all alpha chars as an array

const stringSort = (s, alphabet) => {
  // console.log(s)
  let arr = s.split('')
  //a,b are strings 
  // console.log(alphabet.indexOf('a'))
  return arr.sort((a,b) => {return alphabet.indexOf(a) - alphabet.indexOf(b)}).join('')
}

const defaultAlphabet = "abcdefghijklmnopqrstuvwxyz".split("");

function alphabetize(string, alphabet = defaultAlphabet) {
  return string
    .split("")
    .sort((a, b) => alphabet.indexOf(a) - alphabet.indexOf(b))
    .join("");
}


console.log(stringSort("cxzyba", "bacdefghijklmnopqrstuvwzxy".split("")))//bac

// var points = [40, 100, 1, 5, 25, 10];
// points.sort(function(a, b){return a-b});
//(c,b){return c-b} //+1 
//(c,a){return c-1} -1
// 
*/