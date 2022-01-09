// Implement a function called countUniqueValues, which accepts a sorted
// array, and counts the unique values in the array. There can be negative
// numbers in the array, but it will always be sorted.

function countUniqueValues(array) {
  let p1 = 0;
  let p2 = 1;
  let unique = 0;
  if (array.length === 0) {
    return 0;
  }
  for (let i = 0; i < array.length; i++) {
    if (array[p1] === array[p2]) {
      p2 += 1;
    } else {
      unique += 1;
      p1 = p2;
      p2 += 1;
    }
  }
  return unique;
}

console.log(
  countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]),
  "answer: 7"
);
console.log(countUniqueValues([1]), "answer: 1");
