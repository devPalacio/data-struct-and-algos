//compare two numbers and check if they have the same frequency of digits

function sameFrequency(num1, num2) {
  num1 = num1.toString();
  num2 = num2.toString();
  if (num1.length !== num2.length) {
    return false;
  }
  counter = {};
  for (let i = 0; i < num1.length; i += 1) {
    if (counter[num1[i]]) {
      counter[num1[i]] += 1;
    } else {
      counter[num1[i]] = 1;
    }
  }
  for (let i = 0; i < num2.length; i += 1) {
    if (counter[num2[i]]) {
      counter[num2[i]] -= 1;
    } else {
      return false;
    }
  }
  return true;
}
console.log(sameFrequency(12421, 41221));
