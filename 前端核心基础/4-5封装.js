var a = [1, 2, 3, 5];
const duoblify = (item, index, arr) => {
  return item * 2;
};
const doubleA = a.map(duoblify);

const myMap = (arr, fn) => {
  const result = [];
  for (let index = 0; index < arr.length; index++) {
    const ele = arr[index];
    result.push(fn.call(arr, ele, index, arr));
  }
  return result;
};

const ret = myMap(a, duoblify);
console.log(ret);
