// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

const twoSum = (nums, target) => {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] == target - nums[i]) {
                return [i, j]
            }
        }
    }
};

twoSum([2, 7, 11, 15], 9) //[0, 1]
/*
Time complexity : O(n^2). For each element, we try to find its complement by looping through the rest of array which takes O(n) time. Therefore, the time complexity is O(n^2).

Space complexity : O(1).
*/

const twoSum2 = (nums, target) => {
    let obj = {}

    for (let i = 0; i < nums.length; i++) {
        obj[nums[i]] = i
    }

    for (let i = 0; i < nums.length; i++) {
        const difference = target - nums[i]

        if (difference in obj) {
            return [obj[difference], i]
        }
    }
};
twoSum2([2, 7, 11, 15], 9) //[0, 1]

/*
Time complexity : O(n). We traverse the list containing nn elements exactly twice. Since the hash table reduces the look up time to O(1), the time complexity is O(n)O(n).

Space complexity : O(n). The extra space required depends on the number of items stored in the hash table, which stores exactly nn elements.
*/

const twoSum3 = (nums, target) => {
    let obj = {}

    for (let i = 0; i < nums.length; i++) {
        const difference = target - nums[i]

        if (difference in obj) {
            return [obj[difference], i]
        }
        obj[nums[i]] = i
    }
};

twoSum3([2, 7, 11, 15], 9) //[0, 1]

/*
Complexity Analysis:

Time complexity : O(n). We traverse the list containing nn elements only once. Each look up in the table costs only O(1)O(1) time.

Space complexity : O(n). The extra space required depends on the number of items stored in the hash table, which stores at most nn elements.
*/