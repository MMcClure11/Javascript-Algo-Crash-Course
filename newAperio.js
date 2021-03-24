//Live Code Challenge completed with Nick 3/24/21, given choice of language and platform
//opted for javascript and codeSandBox so he could type too

//1. Sort a string so that it is alphabetical

const alphabeticalSort = (s) => {
  return s.split('').sort().join('')
}

console.log(alphabeticalSort("cbsgdafer"))//abcdefgrs