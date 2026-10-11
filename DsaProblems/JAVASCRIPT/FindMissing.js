function FindMissing(first, arr) {
  let set = new Set(arr);

  //   for (let i = first; i < first + arr.length; i++) {
  //     if (!set.has(i)) {
  //       return i;
  //     }
  //   }

  return -1;
}

console.log(FindMissing(5, [5, 7, 8, 9]));
