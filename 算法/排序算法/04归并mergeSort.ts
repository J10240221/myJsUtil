/**
 * 归并排序
 * 不是原地排序，需要申请临时的 数组空间
 * @param array
 */
const mergeSort = (array: number[]) => {
  // 拆分
  if (array.length >= 2) {
    const middleLen = Math.floor(array.length / 2);
    const arr1 = array.slice(0, middleLen);
    const arr2 = array.slice(middleLen);

    return merge(mergeSort(arr1), mergeSort(arr2));
  } else {
    return array;
  }
};

const merge = (arr1: number[], arr2: number[]) => {
  let result: number[] = [];
  while (arr1.length && arr2.length) {
    let minArr: number[] = [];
    minArr = arr1[0] <= arr2[0] ? arr1 : arr2;
    result.push(minArr.shift());
  }

  while (arr1.length) {
    result.push(arr1.shift());
  }

  while (arr2.length) {
    result.push(arr2.shift());
  }

  console.log('result', result);
  return result;
};

const data1 = [3, 1, 2, 5, 4, 0, 11, 6];
const data2 = [13, 1, 23, 5, 4, 0, 11, 6, -1, -22];

mergeSort(data1);
mergeSort(data2);
