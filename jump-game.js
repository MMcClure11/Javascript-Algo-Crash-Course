// Given an array of non-negative integers,
// determine if a player can jump to the last index of the array
// using the values of the indices as their potential jumping distance. 

// Hint we will use a greedy algorithm and some maths to work backwards through the array

//  0  1  2
// [2, 0, 0]
//set validIndex = 2 (last index)
//check if index to left plus its value is greater than or equal to the current validIndex
//if yes, make that index the new validIndex
// 1 + 0 >= 2 ? false
// 0 + 2 >= 2 ? true, validIndex = 0
// if 0 is a validIndex, the whole function should return true

const canJump = (nums) => {
  if(!nums){
    return false
  }

  let validIndex = nums.length - 1

  for(let i = nums.length - 2; i >= 0; i--) {
    if(i + nums[i] >= validIndex){
      validIndex = i
    }
  }
  return validIndex === 0
}

let arr1 = [2,3,1,1,4] //true
let arr2 = [3,2,1,0,4] //false
let arr3= [2,0,0] //true

canJump(arr1)