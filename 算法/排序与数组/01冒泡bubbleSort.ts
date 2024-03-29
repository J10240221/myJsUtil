/**
 * 冒泡排序，排序完后，从小到大，
 * 大致思路，
 * 从前往后相邻的元素依次比较，大的往后放，知道最后一个，就把最大的放到了最后了
 * 然后再排出第2大的，第n大的，就好了
 * 复杂度为 On2
 * @param arr
 *
 * [5,4,3,6,1]
 * 第1次外循环如下
 * [4,5,3,6,1] // [0] <-> [1]
 * [4,3,5,6,1] // [1] <-> [2]
 * [4,3,5,6,1] // [2] [3] 不交换
 * [4,3,5,1,6] // [3] <-> [4]
 * 完成最后1位的排序
 *
 * 第2次外循环，不遍历已排序的最后1个，循环后，可确定倒数第2位
 * 第3次外循环，不遍历已排序的最后2个，循环后，可确定倒数第3位
 * 第n次外循环，不遍历已排序的最后n-1个，循环后，可确定倒数第n位
 * 当 n = length - 2 时，完成排序
 *
 * 所以外层的 i 控制的是 内层的 j 的遍历的 最后的下标，
 * 关键点即为：**** j < length -i ****
 */
function popSort(array: number[]) {
  // 外层的 i 是 正已经排序好的的元素下标，i每+1，则代表已经拍好了1个
  for (let i = 0; i < array.length - 1; i++) {
    let flag = false; // 是否已经是有序的标志位
    // 内层的 j 是 需要比较的下标
    for (let j = 0; j < array.length - i; j++) {
      if (array[j] > array[j + 1]) {
        // swap 交换顺序
        let temp = array[j + 1];
        array[j + 1] = array[j];
        array[j] = temp;

        flag = true;
      }
    }
    if (!flag) {
      break; // 内层一轮循环后都没有 进行过 交换，则代表已经有序
    }
  }

  console.log(array.toString());
}

const data1 = [3, 1, 2, 5, 4, 0, 11, 6];
// const data2 = [13, 1, 23, 5, 4, 0, 11, 6, -1, -22];

popSort(data1);
// popSort(data2);
