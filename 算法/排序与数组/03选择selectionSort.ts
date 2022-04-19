/**
 * 分已排序区间和未排序区间。
 * 但是选择排序每次会从未排序区间中找到最小的元素，将其放到已排序区间的末尾。
 */
const selectionSort = (array: number[]) => {
  for (let i = 0; i < array.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      const curr = array[j];
      if (curr < array[minIndex]) {
        minIndex = j;
      }
    }

    // swap
    [array[minIndex], array[i]] = [array[i], array[minIndex]];
  }
  console.log(array);
};

const data1 = [3, 1, 2, 5, 4, 0, 11, 6];
const data2 = [13, 1, 23, 5, 4, 0, 11, 6, -1, -22];

selectionSort(data1);
selectionSort(data2);
