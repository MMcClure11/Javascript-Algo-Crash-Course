//LeetCode 977. Squares of a Sorted Array 'EASY'
// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

// Example 1:

// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].
// Example 2:

// Input: nums = [-7,-3,2,3,11]
// Output: [4,9,9,49,121]

// Constraints:

// 1 <= nums.length <= 104
// -104 <= nums[i] <= 104
// nums is sorted in non-decreasing order.

const sortedSquares = (nums) => {
  let arr = []
  for(let num of nums){
    arr.push(num * num)
  }
  return arr.sort(function(a,b){ return a-b })
}

console.log(sortedSquares([-7,-3,2,3,11])) //[4,9,9,49,121]
console.log(sortedSquares([-4,-1,0,3,10])) //[0,1,9,16,100]
 
// Follow up: Squaring each element and sorting the new array is very trivial, could you find an O(n) solution using a different approach?


//Found a O(n) solution -> study this!
// var sortedSquares = function(nums) {
//   // use two pointers
//   // create a new array
//   const result = new Array(nums.length);
//   let left = 0, 
//       right = nums.length - 1;
  
// // don't want to rearrange the array, so iterating the array in descending order 
//   for (let i = nums.length - 1; i >= 0; i--) {
//       if (Math.abs(nums[left]) < Math.abs(nums[right])) {
//           result[i] = nums[right] ** 2
//           right--;
//       } else {
//           result[i] = nums[left] ** 2
//           left++;
//       }
//   }
  
//   return result;
// };