/* 
Q: Write a program that returns the frequency of short string occurs anywhere in the given long string.
*/

function naiveSearch(long, short) {
  let count = 0;
  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      if (long[i + j] !== short[j]) break;
      if (j === short.length - 1) count++;
    }
  }
  return count;
}

console.log(naiveSearch("laugh out loud is lol and lol is fun", "lol"));
