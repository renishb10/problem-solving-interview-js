// Find number of characters in a string.
// Look for only alphanumeric and case-insensitive
// Return a map or an object
function no_of_char(str) {
  const hMap = new Map();
  for (let c of str) {
    c = c.toLowerCase();
    if (hMap.has(c)) {
      hMap.set(c, hMap.get(c) + 1);
    }
    else if(c.match(/^[0-9a-z]+$/)) {
      hMap.set(c, 1);
    }
  }
  return hMap;
}

// Refactored
function no_of_char2(str) {
  const hMap = {}
  for (let c of str) {
    c = c.toLowerCase();
    if (/^[0-9a-z]/.test(c)) {
      hMap[c] = ++hMap[c] || 1;
    }
  }
  return hMap;
}

// Refactored 2
// Regex is comparatively slower, so use charCodeAt which is 50% faster on modern browsers
function no_of_char3(str) {
  const hMap = {}
  for (let c of str) {
    const code = c.charCodeAt();
    if ((code > 47 && code < 58) || // (0-9)
        (code > 64 && code < 91) || // (A-Z)
        (code > 96 && code < 123)) { // (a-z)
      hMap[c] = ++hMap[c] || 1;
    }
  }
  return hMap;
}

console.log("Output 1")
no_of_char("no of chars in a string 1234").forEach((v,k) => {
  console.log(k + "=" + v);
})

console.log("\nOutput 2")
Object.entries(no_of_char2("no of chars in a string 1234")).forEach(([k,v]) => {
  console.log(k + "=" + v);
});

console.log("\nOutput 3")
Object.entries(no_of_char3("no of chars in a string 1234")).forEach(([k,v]) => {
  console.log(k + "=" + v);
});