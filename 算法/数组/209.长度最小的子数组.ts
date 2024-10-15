/*
 * @lc app=leetcode.cn id=209 lang=typescript
 *
 * [209] 长度最小的子数组
 *
 * https://leetcode.cn/problems/minimum-size-subarray-sum/description/
 *
 * algorithms
 * Medium (46.71%)
 * Likes:    2247
 * Dislikes: 0
 * Total Accepted:    873.8K
 * Total Submissions: 1.9M
 * Testcase Example:  '7\n[2,3,1,2,4,3]'
 *
 * 给定一个含有 n 个正整数的数组和一个正整数 target 。
 *
 * 找出该数组中满足其总和大于等于 target 的长度最小的 子数组 [numsl, numsl+1, ..., numsr-1, numsr]
 * ，并返回其长度。如果不存在符合条件的子数组，返回 0 。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：target = 7, nums = [2,3,1,2,4,3]
 * 输出：2
 * 解释：子数组 [4,3] 是该条件下的长度最小的子数组。
 *
 *
 * 示例 2：
 *
 *
 * 输入：target = 4, nums = [1,4,4]
 * 输出：1
 *
 *
 * 示例 3：
 *
 *
 * 输入：target = 11, nums = [1,1,1,1,1,1,1,1]
 * 输出：0
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= target <= 10^9
 * 1 <= nums.length <= 10^5
 * 1 <= nums[i] <= 10^5
 *
 *
 *
 *
 * 进阶：
 *
 *
 * 如果你已经实现 O(n) 时间复杂度的解法, 请尝试设计一个 O(n log(n)) 时间复杂度的解法。
 *
 *
 */

// @lc code=start

// 暴力
function minSubArrayLen1(target: number, nums: number[]): number {
  let result = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      // 闭区间
      const sumVal = nums.slice(i, j + 1).reduce((sum, curr) => {
        return sum + curr;
      }, 0);
      if (sumVal >= target) {
        result = Math.min(j - i + 1, result);
        break;
      }
    }
  }
  return result === Number.MAX_SAFE_INTEGER ? 0 : result;
}
/**
 * 粗暴双指针
 */
function minSubArrayLen2(target: number, nums: number[]): number {
  let result = Number.MAX_SAFE_INTEGER;

  let l = 0;
  let r = 0;
  // 闭区间，l~r 中间满足条件 记录，并 l++, 否则 r++
  while (r < nums.length) {
    const sum = nums.slice(l, r + 1).reduce((sum, curr) => sum + curr, 0);
    if (sum >= target) {
      result = Math.min(result, r - l + 1);
      // 满足条件，尝试缩小范围
      l++;
    } else {
      r++;
    }
  }

  return result === Number.MAX_SAFE_INTEGER ? 0 : result;
}

/**
 * 终极双指针
 * @param target
 * @param nums
 * @returns
 */
function minSubArrayLen(target: number, nums: number[]): number {
  let result = Number.MAX_SAFE_INTEGER;

  let l = 0;
  let r = 0;
  /** 记录当下的 和 */
  let sum = 0;
  // 闭区间，l~r 中间满足条件 记录，并 l++, 否则 r++
  while (r < nums.length) {
    const val = nums[r];
    sum += val;

    if (sum >= target) {
      result = Math.min(result, r - l + 1);
      // 尝试缩小左窗口
      while (l <= r) {
        const lVal = nums[l];
        l++;
        sum -= lVal;

        if (sum >= target) {
          result = Math.min(result, r - l + 1);
        } else {
          break;
        }
      }
    }
    r++;
  }

  return result === Number.MAX_SAFE_INTEGER ? 0 : result;
}
// @lc code=end
