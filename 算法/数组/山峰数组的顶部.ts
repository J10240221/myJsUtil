/**
 * 递归，
 * @param arr
 * @param firstIdx
 * @returns
 */
function peakIndexInMountainArray(arr: number[], firstIdx = 0): number {
  console.log(arr);

  const len = arr.length;

  // 除2 并 向下取整
  let midIdx = len >> 1;

  const currV = arr[midIdx];
  const preV = arr[midIdx - 1];
  const nextV = arr[midIdx + 1];
  if (currV > preV && currV > nextV) {
    // 找到了，递归出口
    return midIdx + firstIdx;
  } else if (preV < nextV) {
    return peakIndexInMountainArray(arr.slice(midIdx, len), firstIdx + midIdx);
  } else {
    return peakIndexInMountainArray(arr.slice(0, midIdx + 1), firstIdx);
  }
}

const demo = [0, 1, 2, 3, 4, 5, 4, 3, 2];
// 输出：2

console.log(peakIndexInMountainArray(demo));

/**
 * 常规的 二分法
 * @param arr
 */
function peakIndexInMountainArray2(arr: number[]): number {
  const len = arr.length;

  let l = 0;
  let r = len - 1;
  while (l <= r) {
    // 向下取整，需要加1, 如 l = 0; r = 1, 希望是 1
    // 如：3 5 3 2, 0， a:l=0,r=4,mid = 2; b:l=0,r=1,需要让mid=1，所以需要 +1 再向下取整
    const mid = (l + r + 1) >> 1;
    if (arr[mid] > arr[mid - 1] && arr[mid] > arr[mid + 1]) {
      return mid;
    } else if (arr[mid] > arr[mid - 1]) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }

  return -1;
}

console.log(peakIndexInMountainArray2([3, 5, 3, 2, 0]));
