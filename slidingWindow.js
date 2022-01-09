//Find the largest sum of n consective numbers in an array using a sliding window approach
//ex : maxSubarraySum([1,2,3,4],2) // 7
function maxSubarraySum(array, num) {
  if (array.length < num) return null;

  let maxSum = 0;
  let tempSum = 0;
  //add up first n numbers
  for (let i = 0; i < num; i += 1) {
    maxSum += array[i];
  }
  tempSum = maxSum;
  //sliding window (subtract first value, add last value)
  for (let i = 0; i < array.length - num; i += 1) {
    tempSum = tempSum - array[i] + array[i + num];
    if (tempSum > maxSum) {
      maxSum = tempSum;
    }
  }
  return maxSum;
}
console.log(maxSubarraySum([1, 2, 3, 4], 2), "answer 7");
console.log(maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 10], 3), "answer 21");
