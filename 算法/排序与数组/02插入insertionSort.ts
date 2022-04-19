/**
 * 插入排序
 * 我们将数组中的数据分为两个区间，已排序区间和未排序区间。
 * 初始已排序区间只有一个元素，就是数组的第一个元素。
 * 插入算法的核心思想是取未排序区间中的元素，在已排序区间中找到合适的插入位置将其插入，
 * 并保证已排序区间数据一直有序。重复这个过程，直到未排序区间中元素为空，算法结束。
 *
 * ******左边排序区+右边未排序：[ 0 , j (即 i-1 ) ][ i , n-1 ]******
 * @param array
 */
const insertionSort = (array: number[]) => {
  // 外层的 i 是[两个区间] 中的已排序区间的length
  for (let i = 1; i < array.length; i++) {
    const currVal = array[i];
    let j = i - 1;
    // 查找插入的位置
    for (; j >= 0; j--) {
      const prev = array[j];
      if (currVal < prev) {
        array[j + 1] = array[j]; // 数据移动，空出位置的位置 最后会被 currVal 回填上
      } else {
        break;
      }
    }

    // 为什么是 j + 1呢？可以简单的，假如一开始就 break，的情况，就是需要 f(j) = i , 所以就是 j + 1
    array[j + 1] = currVal;
  }
  console.log(array);
};

const data1 = [3, 1, 2, 5, 4, 0, 11, 6];
const data2 = [13, 1, 23, 5, 4, 0, 11, 6, -1, -22];

selectSort(data1);
selectSort(data2);
