// Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such

function validAnagram(str1, str2) {
  //verify array are same length
  if (str1.length !== str2.length) {
    return false;
  }
  //iterate through first string and place in object
  let counter1 = {};
  let counter2 = {};

  for (let letter of str1) {
    if (!(letter in counter1)) {
      counter1[letter] = 1;
    } else {
      counter1[letter] += 1;
    }
  }
  for (let letter of str2) {
    if (!(letter in counter2)) {
      counter2[letter] = 1;
    } else {
      counter2[letter] += 1;
    }
  }

  for (let key of Object.keys(counter1)) {
    if (counter1[key] !== counter2[key]) {
      return false;
    }
  }
  return true;
}

console.log(validAnagram("", "")); // true
console.log(validAnagram("aaz", "zza")); // false
console.log(validAnagram("anagram", "nagaram")); // true
console.log(validAnagram("rat", "car")); // false
console.log(validAnagram("awesome", "awesom")); // false
console.log(validAnagram("amanaplanacanalpanama", "acanalmanplanpamana")); // false
console.log(validAnagram("qwerty", "geywrt")); // false
console.log(validAnagram("texttwisttime", "timetwisttext")); // true
