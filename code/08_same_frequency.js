/*
Q: Write a function called sameFrequency. Give two positive integers, find out if the two numbers have the same frequency of digits. O(n)
*/

function sameFrequency(num1, num2) {
  const countMap = {};
  num1 = num1.toString();
  num2 = num2.toString();

  if (num1.length !== num2.length) return false;

  for (let n of num1) {
    countMap[n] = (countMap[n] && countMap[1] + 1) || 1; 
  }

  for (let n of num2) {
    if (!countMap[n] || countMap[n] <= 0) {
      return false 
    }
    else {
      --countMap[n];
    } 
  }
  return true;
}