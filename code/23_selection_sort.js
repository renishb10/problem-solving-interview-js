/* 
Q: Selection Sort, select the lowest value and swap it from the beginning.
*/

function selectionSort(arr) {
  function swap(arr, idx1, idx2) {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  }

  for (let i = 0; i < arr.length - 1; i++) {
    let low = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[low]) low = j;
    }
    if (i !== low) swap(arr, i, low);
  }

  return arr;
}

console.log(selectionSort([13, 7, 22, -1, 6, 15, 25, 3]));
