//using 2 pointers, find if the average of 2 values in an array are equal to target value.

function averagePair(array, target) {
  let p1 = 0;
  let p2 = 1;

  if (array.length === 0) {
    return false;
  }
  for (p2; p2 < array.length; p2++) {
    if ((array[p1] + array[p2]) / 2 === target) {
      return true;
    }
    if (p2 === array.length - 1) {
      p1 += 1;
      //p2 gets incremented once it re-enters loop
      p2 = p1;
    }
  }
  return false;
}
console.info(averagePair([1, 2, 3], 2.5));
console.info(averagePair([], 2.5));
console.info(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));
