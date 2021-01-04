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

//Shan's answer
const maxSubArray = (nums) => {
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

// Leetcode Problem - 53 Maximum Subarray video
// https://www.youtube.com/watch?v=xo2_1l7ScAw
// https://medium.com/@rsinghal757/kadanes-algorithm-dynamic-programming-how-and-why-does-it-work-3fd8849ed73d

let maxSubArrayTwo = function(nums) {
  let localMax = 0;
  let globalMax = Number.NEGATIVE_INFINITY;

  for (let i =0; i < nums.length; i++) {
    localMax = Math.max(nums[i], nums[i] + localMax)
    if (localMax > globalMax) {
      globalMax = localMax
    }
  }
  return globalMax
}