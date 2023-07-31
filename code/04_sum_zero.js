// Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair
// where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist.

// Used multiple pointers (two pointers) technique
// Loop from start and end, when reaches mid stop (assuming given input is sorted)
// So the best loop is a while loop
function sumZero(arr) {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    const sum = arr[start] + arr[end]; // Note this is "SUM" and we expect a "0"
    if (sum === 0) {
      return [arr[start], arr[end]];
    }
    else if (sum > 0) {
      // if the sum > 0, that says right value is much larger (sum>0) than left, so decrement right (lesser value)
      end--;
    }
    else {
      start++;
    }
  }
}

console.log(sumZero([-4,-2,0,1,2,3]))
console.log(sumZero([-4,-3,0,1,2,3]))
console.log(sumZero([-4,-3,0,1,5,6]))