/* 
Q: Implement Quick Sort
Big(O) nLogn
Find Pivot element and find its correct position in the array, while finding it we swap all the smaller numbers to the left of pivot position and finally swap the last found min value to pivot value, so we get the correct position
*/

function pivot(arr, start = 0, end = arr.length + 1) {
  function swap(arr, idx1, idx2) {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  }

  let pivot = arr[start];
  let swapIdx = start; // Take first value as pivot value (not recommended though)

  for (let i = start; i < arr.length; i++) {
    if (pivot > arr[i]) {
      // if we find lesser value than the pivot, increment swapIdx
      swapIdx++;
      swap(arr, swapIdx, i); // also swap them to the left
    }
  }
  swap(arr, start, swapIdx); // once the loop ends, i.e after finding the last min value, replace with pivot
  return swapIdx;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    // base condition is if the left & right should not be equal
    let pivotIndex = pivot(arr, left, right);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

console.log(quickSort([4, 8, 0, -10, 2, 1, 5, 7, 6, 3]));
