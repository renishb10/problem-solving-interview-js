/* 
Q: Radix Sort
O(nd)
Its not regular comparison sort like merge or quick, here we each digit from the number and put them into respective radix base 10 numbers (i.e 0 to 9) and merge them back
The below implementation only works for Postive numbers
*/

function getDigit(num, place) {
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

function countDigit(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    max = Math.max(max, countDigit(nums[i]));
  }
  return max;
}

function radixSort(nums) {
  let maxDigitCount = mostDigits(nums);
  for (let k = 0; k < maxDigitCount; k++) {
    let buckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < nums.length; i++) {
      let digit = getDigit(nums[i], k);
      buckets[digit].push(nums[i]);
    }
    nums = [].concat(...buckets);
  }
  return nums;
}

console.log(radixSort([4, 8, 0, 2, 1, 5, 7, 6, 3]));
