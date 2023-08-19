/* 
Q: Insertion Sort, insert the number to the correct spot on the left array.
*/

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentValue = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > currentValue) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = currentValue;
  }
  return arr;
}

console.log(insertionSort([13, 7, 22, -1, 6, 15, 25, 3]));
