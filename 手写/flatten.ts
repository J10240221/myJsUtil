/**
 * 扁平化
 * @param arr
 * @param depth
 */
const flatten = (arr: any[], depth = Number.MAX_SAFE_INTEGER) => {
  let ret: any[] = [];

  arr.forEach((item) => {
    if (Array.isArray(item) && depth > 0) {
      ret.push(...flatten(item, depth - 1));
    } else {
      ret.push(item);
    }
  });

  return ret;
};

const aa = [
  [1, 1],
  [1, 1, [2, [3, [4]]]],
];

console.log(flatten(aa, 1));
console.log(flatten(aa, 2));
console.log(flatten(aa, 4));
