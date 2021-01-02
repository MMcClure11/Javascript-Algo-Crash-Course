// Algo asked at Microsoft, salesforce and others
// Given a positive integer, return true if it is a perfect square, false if it is not
// Examples
// 9 //=> true
// 10 //=> false
// Conditions: Do not use any built in methods such as sqrt
// Hint: Use a binary search function

//     M
//     L R
// 1 2 3 4 5 6 7 8 9 
// num = 9

const isPerfectSquare = (num) => {
  if(num < 1){
    return false
  }

  let left = 1
  let right = num

  while(left <= right) {
    let midpoint = left + Math.floor((right - left)/2)

    if(midpoint * midpoint === num) {
      return true
    } else if (midpoint * midpoint > num) {
      right = midpoint - 1
    } else if (midpoint * midpoint < num) {
      left = midpoint + 1
    }
  }
  return false
}

// isPerfectSquare(9) // true
// isPerfectSquare(25) // true
isPerfectSquare(8) //false