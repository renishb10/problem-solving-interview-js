/*
Q: Write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array.
Eg: maxSubarraySum([1,2,5,2,8,1,5],2) // 10
because sum of 2 consecutive/sequence numbers that gives max value
*/

// Naive n^2 approach
function maxSubarraySum(arr, n) {
  if (!(arr.length) || (arr.length < n)) {
    return null;
  }
  
  let max = -Infinity;
  for (let i = 0; i < arr.length - n + 1; i++) {
    let temp = 0;
    for (let j = 0; j < n; j++) {
      temp += arr[i + j] // if i is index 1 (second iteration, to loop n times, j's first iteration is 0, so 1 + 0, start from second number, since second iteration :)
    }
    if (temp > max) {
      max = temp;
    }
  }

  return max;
}

// Refactored using "Sliding Window technique"
// Instead of adding each sub array, we just subtract first value in the sub array and add next value from the array to this sub array.
function maxSubarraySum2(arr, n) {
  if (arr.length < n) return null;

  let maxSum = 0;
  let tempSum = 0;
  for (let i = 0;  i < n; i++) {
    maxSum += arr[i];
  }

  tempSum = maxSum;
  for (let i = n; i < arr.length; i++) { // i starts from n because down below we subtract i - n, to get the first value in subarray
    tempSum = tempSum - arr[i - n] + arr[i];
    if (tempSum > maxSum) {
      maxSum = tempSum;
    }
  }
  return maxSum;
}

console.log("Output 1")
console.log(maxSubarraySum([1,2,5,2,8,1,5],2))
console.log("Output 2")
console.log(maxSubarraySum2([1,2,5,2,8,1,5],2))