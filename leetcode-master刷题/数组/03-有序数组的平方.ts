/* 给你一个按 非递减顺序 排序的整数数组 nums，返回 每个数字的平方 组成的新数组，要求也按 非递减顺序 排序。

示例 1： 输入：nums = [-4,-1,0,3,10] 输出：[0,1,9,16,100] 解释：平方后，数组变为 [16,1,0,9,100]，排序后，数组变为 [0,1,9,16,100]

示例 2： 输入：nums = [-7,-3,2,3,11] 输出：[4,9,9,49,121] */

/**
 * 暴力，时间复杂度为排序的 O(n*log n)
 * @param nums
 * @returns
 */
function main(nums: number[]) {
  const ret = nums.map((num) => num * num).sort((a, b) => a - b);
  console.log('ret', ret);
  return ret;
}

main([-7, -3, 2, 3, 11]);

/**
 * 双指针，降低时间复杂度到 O(n)，因为有负数，所以最大的数，要么是 开头 要么是 结尾
 * @param nums
 * @returns
 */
function main2(nums: number[]) {
  let headIdx = 0;
  let tailIdx = nums.length - 1;
  const ret: number[] = [];
  while (headIdx <= tailIdx) {
    const headNum = nums[headIdx];
    const tailNum = nums[tailIdx];
    if (Math.abs(headNum) > tailNum) {
      // 头部比后面值大时
      ret.unshift(headNum * headNum);
      headIdx++;
    } else {
      ret.unshift(tailNum * tailNum);
      tailIdx--;
    }
  }
  console.log(ret);
}

main2([-7, -3, 2, 3, 11]);

export {};
