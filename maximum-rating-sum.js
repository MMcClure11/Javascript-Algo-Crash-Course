/*
3/11/2021 Part 2/2 Confluent HackerRank challenge, allowed to pick which programming language

Maximum Rating Sum
Ryan is movie obsessed and has a collected list of movie quality ratings. 
He wants to watch the largest contiguous list of movies with teh highest cumulative ratings possible. 
To do this, he must calculate the sum of all contiguous subarrays in order to determine the maximum possible subarray sum.

For example, ratings are arr=[-1,3,4.-2,5,-7]
We can see that the highest contiguous subarray runs from arr[1]-arr[4] 
  and is 3 + 4 + -2 + 5 = 10 

Function Description
Complete the function maximumSum in the editor below. 
It must return a long integer denoting the maximum sum for any contiguous subarray in arr.

maximumSum has the following parameters:
arr[arr[0],...arr[n-1]]: an array of integers
*/

/* 
Complete the 'maximumSum' function below.
The function is expected to return a LONG_INTEGER (ignore for javascript)
The function accepts INTEGER_ARRAY as a parameter.
*/

function maximumSum(arr) {
  //write your code here
  let ans = arr[0];
  let sum = arr[0];

  for(let i = 0; i < arr.length; i++){
    ans = Math.max(arr[i], ans + arr[i]);
    sum = Math.max(sum, ans);
  }

  return sum 

}
//Passed 12/14 tests
//Kadane's Algorithm, same as max-sub-array