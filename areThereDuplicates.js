function areThereDuplicates(...args) {
  let bag = {};
  console.log(args);
  for (let i = 0; i < args.length; i += 1) {
    if (!bag[args[i]]) {
      bag[args[i]] = 1;
      console.log(bag);
    } else {
      return true;
    }
  }
  console.log(bag);
  return false;
}

console.log(areThereDuplicates(1, 2, 2));
