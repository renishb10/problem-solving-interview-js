// Q: Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique
// values in the array. There can be negative numbers in the array but it will always be sorted.

// O(n) - Using two pointer technique
function countUniqueValues(arr) {
  let sum = 1;

  if (!arr.length) return 0;

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] !== arr[i+1]) {
      sum++;
    }
  }
  return sum;
}

console.log(countUniqueValues([1,1,1,1,2]))
console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]))
console.log(countUniqueValues([]))