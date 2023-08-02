/*
Q: Given a sorted array of integers, write a function called search, that accepts a value and returns the index where the value
passed to the function is located. If the value is not found, return -1.
eg: search([1,3,5,7,22,55,57,63,94],63)
*/

// Naive solution
// O(n)
function search(arr, n) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === n) {
      return i;
    }
  }
  return -1;
}

// Using Divide and Conquer technique
// O(logn)
function search2(arr, n) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) { // The start and end should be "<=", only then we get the first/last value
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === n) return mid;

    if (n < arr[mid]) {
      end = mid - 1;
    }
    else {
      start = mid + 1;
    }
  }
  return -1;
}