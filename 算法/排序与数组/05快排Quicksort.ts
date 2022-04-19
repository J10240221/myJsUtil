/**
 * 快排
 * 可实现原地排序，但是我这个 并不是原地排序 ，花费了大于 O1 的空间复杂度
 * 原地排序的，是通过下标 去排序的
 * @param array
 * @param start  包含
 * @param end  不包含
 */
const quicksort = (array: number[]) => {
  if (array.length >= 2) {
    const targetIndex = 0; // 分割点下标
    const target = array[targetIndex];
    let left: number[] = [];
    let right: number[] = [];
    for (let i = targetIndex + 1; i < array.length; i++) {
      const val = array[i];
      if (val > target) {
        right.push(val);
      } else {
        left.push(val);
      }
    }
    console.log([...quicksort(left), target, ...quicksort(right)]);

    return [...quicksort(left), target, ...quicksort(right)];
  } else {
    return array;
  }
};

const data1 = [3, 1, 2, 5, 4, 0, 11, 6];
const data2 = [13, 1, 23, 5, 4, 0, 11, 6, -1, -22];

quicksort(data1);
quicksort(data2);
