#Given an array of nums, we define a running sum of an array as 
#runningSum[i] = sum(nums[0]...nums[i])
#return the running sum of nums

#input nums = [1,2,3,4]
#output [1,3,6,10]

#input nums=[1,1,1,1,1,1]
#output [1,2,3,4,5]

def running_sum(nums)
  total = 0
  puts nums.map { |num| num = total += num }
end

running_sum([1,2,3,4])
puts
running_sum([1,1,1,1,1,1])