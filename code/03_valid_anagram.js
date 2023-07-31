// Given two strings, write a function to determine if the second string is an anagram of the first.
// An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

// Using the Frequency Counter technique
// O(n)
function validAnagram(str1, str2){
  if (str1.length !== str2.length) return false;
  
  const countMap1 = {};
  const countMap2 = {};
  
  for (let v of str1) {
      countMap1[v] = (countMap1[v] || 0) + 1;
  }
  for (let v of str2) {
      countMap2[v] = (countMap2[v] || 0) + 1;
  }
  for (let k in countMap2) {
      if (!countMap1[k]) return false;
      if (countMap2[k] !== countMap1[k]) return false;
  }
  return true;
}

// Slightly better solution because, we use one Map and only two loop
function validAnagram2(str1, str2){
  if (str1.length !== str2.length) return false;
  
  const countMap = {};
  
  for (let v of str1) {
    countMap[v] = (countMap[v] || 1) + 1;
  }
  for (let v of str2) {
    if (!countMap[v]) {
      return false;
    }
    else {
      countMap[v] -= 1;
    }
  }
  return true;
}

console.log("Output1")
console.log(validAnagram("anagram", "nagaram"));
console.log(validAnagram("aanagram", "nagaram"));

console.log("\nOutput2")
console.log(validAnagram2("anagram", "nagaram"));
console.log(validAnagram2("aanagram", "nagaram"));