// Given an array, find the numbers that are missing from the sequence
// Examples: 
// [4,3,2,7,8,2,3,1] //=> [5,6]
// [1,2,3,4,7,8] //=> [5,6]
// [1,2,4,2] //=> [3]
// [1,5,7,8,6] //=> [2,3,4]
// Solve in O(n)


//Notes: Shan's solve only works with single digits in the array, 
//and Shan’s solution does not cover edge cases such as more than two missing consecutively. 
//Did some googling with not much helpful insight. 
//I think how you solve really depends on if the given array is sequential or not, 
//and if it has more than single digits…
//Some prompts indicate there will only be one num missing.

const findMissingNums = (nums) => {
  for(let i = 0; i < nums.length; i++){
    let q = Math.abs(nums[i]) - 1
    nums[q] = Math.abs(nums[q]) * -1
  }

  let results = []

  for(let i = 0; i < nums.length; i++){
    if(nums[i] > 0){
      results.push(i + 1)
    }
  }
  return(results)
}

let arr1 = [1,2,4,2] //=> [3]
let arr2 = [1,2,3,4,7,8] //=> [5,6]
let arr3 = [4,3,2,7,8,2,3,1] //=> [5,6]
let arr4 = [1,5,7,8,6] //=> [2,3,4]

findMissingNums(arr5)
