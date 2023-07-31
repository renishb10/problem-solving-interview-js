// Write a function called "same", which accepts two arrays. The function should return true if every value
// in the array has its corresponding value squared in the second array. The frequency of values must be the same.

// Naive solution
// O(n)^2
// Using nested for or indexOf
function same(a1,a2) {
  if (a1.length !== a2.length) {
    return false;
  }
  for (let i = 0; i < a1.length; i++) {
    for (let j = 0; j < a2.length; j++) {
      if ((a1[i] ** 2) === a2[j]) {
        a2.splice(j,1);
        break; // breaking it because we stop the loop if we encounter first matching value
      }
    }
  }
  if (a2.length > 0) {
    return false;
  }
  return true;
}

// Refactored using "Frequency counter"
// O(n)
// Remember having multiple separate n loop is always better than nested loop
function same2(a1,a2) {
  if (a1.length !== a2.length) {
    return false;
  }
  const countMap1 = {}
  const countMap2 = {}
  for (let v of a1) {
    countMap1[v] = (countMap1[v] || 0) + 1
  }
  for (let v of a2) {
    countMap2[v] = (countMap2[v] || 0) + 1
  }
  for (let key in countMap1) {
    if (!(key ** 2 in countMap2)) {
      return false;
    }
    if (countMap1[key**2] !== countMap2[key]) {
      return false;
    }
  }
  return true;
}

console.log("Output 1")
console.log(same([1,2,3], [4,1,9]))

console.log("\nOutput 2")
console.log(same2([1,2,3], [4,1,9]))