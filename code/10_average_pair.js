/*
Q: Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.
Eg: 
averagePair([1,2,3],2.5) // true
averagePair([1,3,3,5,6,7,10,12,19],8) // true
averagePair([-1,0,3,4,5,6], 4.1) // false
averagePair([],4) // false
*/

function averagePair(arr, avg){
  if (!arr.length) return false;
  const pairSum = avg * 2;
  let i = 0;
  let j = arr.length - 1;
  while (i < j)
  {
      let tempSum = arr[i] + arr[j];
      if (tempSum === pairSum) return true;
      
      if (tempSum < pairSum) {
          i++;
      }
      else if (tempSum > pairSum) {
          j--;
      }
  }
  
  return false;
}


console.log(averagePair([1,2,3],2.5)) // true
console.log(averagePair([1,3,3,5,6,7,10,12,19],8)) // true
console.log(averagePair([-1,0,3,4,5,6], 4.1)) // false
console.log(averagePair([],4)) // false