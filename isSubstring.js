//woo got this one on my first try :)

function isSubsequence(sub, dom) {
  // good luck. Add any arguments you deem necessary.
  let p1 = 0;
  let p2 = 0;

  for (p2; p2 < dom.length; ) {
    if (sub[p1] === dom[p2] && sub.length === p1 + 1) {
      return true;
    } else if (sub[p1] === dom[p2]) {
      p1 += 1;
      p2 += 1;
    } else {
      p2 += 1;
    }
  }
  return false;
}
console.log(isSubsequence("hello", "hello world"), "true");
console.log(isSubsequence("hello", "haeblclo world"), "true");
console.log(isSubsequence("hello", "hlleo world"), "false");
