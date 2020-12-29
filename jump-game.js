

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