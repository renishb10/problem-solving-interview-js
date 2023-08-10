/* 
Q: Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.

findLongestSubstring('') // 0
findLongestSubstring('rithmschool') // 7
findLongestSubstring('thisisawesome') // 6
findLongestSubstring('thecatinthehat') // 7
findLongestSubstring('bbbbbb') // 1
findLongestSubstring('longestsubstring') // 8
findLongestSubstring('thisishowwedoit') // 6
Time Complexity - O(n)
*/

function findLongestSubstring(str){
  let left = 0;
  let seen = {};
  let max = 0;
  
  for (let right = 0; right < str.length; right++) {
      let char = str[right];
      // Check if the char exists in the map
      if (seen.hasOwnProperty(char) && seen[char] >= left) {
          // then increment left pointer to the last seen + 1;
          left = seen[char] + 1;
      }
      
      max = Math.max(max, (right - left) + 1);
      seen[char] = right;
  }
  
  return max;
}

console.log(findLongestSubstring('')) // 0
console.log(findLongestSubstring('rithmschool')) // 7
console.log(findLongestSubstring('thisisawesome')) // 6
console.log(findLongestSubstring('thecatinthehat')) // 7
console.log(findLongestSubstring('bbbbbb')) // 1
console.log(findLongestSubstring('longestsubstring')) // 8
console.log(findLongestSubstring('thisishowwedoit')) // 6
