//google question

//given a function called rob(), 
//need to determine maximum number of houses you can rob without alerting the police
//can not rob houses next to eachother
  //rob 1st and 3rd or 2nd and 4th 
//[8,1,3,10,7]
//make new array
//[8,8,11,18, 18] need to return 18
  //dynamic

const rob = (nums) => {
  //check if valid array or if length is 0
  if(!nums || nums.length === 0){
    return 0
  }
  //check if only one house, that's all you can steal
  if(nums.length === 1){
    return nums[0]
  }

  //nums = [1,2,3,1]
  //total = [1,2,4,4]
  let total = []
  total[0] = nums[0] //set first num in total to ammount of first house
  total[1] = Math.max(nums[0], nums[1]) //check if first or second element is more

  for(let i = 2; i < nums.length; i++) {
    total[i] = Math.max(total[i - 1], (total[i -2] + nums[i]))
    //which is greater, the amount from one house ago
    //or the amount from two houses ago plus current amount
  }

  return total[total.length - 1]

}

// rob([8,1,3,10,7])