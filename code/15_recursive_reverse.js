/*
Q: Write a recursive function called reverse which accepts a string and returns a new string in reverse.
*/

function reverse(str) {
  if (str.length === 0) return "";
  let c = str.slice(-1);
  let sub = str.substring(0, str.length - 1);
  return c + reverse(sub);
}

console.log(reverse("awesome")); // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'
