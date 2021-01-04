// Kadane's Algorithm
// Given an integer array nums, find the contiguous subarray (containing at least one number)
// which has the largest sum and return its sum

// [-1,2,3,-5,4]
// need two vars
// current = -1,2,5,0,4
// is the current greater or current plus the maxCurrent ? 
// 2 + -1 === 1; which is greater 1 or 2 ? 2! so update current with 2
// global = -1,2,5
// which is greater -1 or 2 ? 2, update global with two

// add first element to both vars

const maxSumArray = (nums) => {
  let maxCurrent = nums[0]
  let maxGlobal = nums[0]
  for(let i = 1; i < nums.length; i++) {
    maxCurrent = Math.max(nums[i], maxCurrent + nums[i])
    if (maxCurrent > maxGlobal) {
      maxGlobal = maxCurrent
    }
  }
  return maxGlobal //return the largest sum
}