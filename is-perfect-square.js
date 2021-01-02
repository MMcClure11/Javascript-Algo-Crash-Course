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