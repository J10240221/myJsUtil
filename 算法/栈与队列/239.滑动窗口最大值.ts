/*
 * @lc app=leetcode.cn id=239 lang=typescript
 *
 * [239] 滑动窗口最大值
 *
 * https://leetcode.cn/problems/sliding-window-maximum/description/
 *
 * algorithms
 * Hard (49.14%)
 * Likes:    2927
 * Dislikes: 0
 * Total Accepted:    714.5K
 * Total Submissions: 1.5M
 * Testcase Example:  '[1,3,-1,-3,5,3,6,7]\n3'
 *
 * 给你一个整数数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。你只可以看到在滑动窗口内的 k
 * 个数字。滑动窗口每次只向右移动一位。
 *
 * 返回 滑动窗口中的最大值 。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums = [1,3,-1,-3,5,3,6,7], k = 3
 * 输出：[3,3,5,5,6,7]
 * 解释：
 * 滑动窗口的位置                最大值
 * ---------------               -----
 * [1  3  -1] -3  5  3  6  7       3
 * ⁠1 [3  -1  -3] 5  3  6  7       3
 * ⁠1  3 [-1  -3  5] 3  6  7       5
 * ⁠1  3  -1 [-3  5  3] 6  7       5
 * ⁠1  3  -1  -3 [5  3  6] 7       6
 * ⁠1  3  -1  -3  5 [3  6  7]      7
 *
 *
 * 示例 2：
 *
 *
 * 输入：nums = [1], k = 1
 * 输出：[1]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= nums.length <= 10^5
 * -10^4 <= nums[i] <= 10^4
 * 1 <= k <= nums.length
 *
 *
 */

// @lc code=start
/** 暴力解法 */
function maxSlidingWindow1(nums: number[], k: number): number[] {
  // [] 左闭右闭
  let l = 0;
  let r = k - 1;
  const result: number[] = [];
  while (r < nums.length) {
    const currA = nums.slice(l, r + 1);
    const max = Math.max(...currA);
    result.push(max);
    l++;
    r++;
  }
  return result;
}
/**
 * 思路： 在窗口内，新进来的一定要留着，依次和前辈去比较，只要比前辈大，就把前辈搞掉，保持非 严格单调递减队列
 * 新人 依次 去猎杀 次新人，老人， 但凡老人没有比新人强，则 被裁掉
 * 比如
 *  [5 4 3 4] 2 3 ---->  [5 4 4]
 *  [1 -1 -4 -5 -3] ---> [1, -1 -3]
 */

//
function maxSlidingWindow(nums: number[], k: number): number[] {
  // [] 左闭右闭
  let l = 0;
  let r = 0;
  const result: number[] = [];
  /** 单调递增队列 */
  let queue: number[] = [Number.MIN_SAFE_INTEGER];

  while (r < nums.length) {
    const newOne = nums[r];
    const prevOne = nums[l - 1];
    // 如果刚刚移出去的那一项，就是 最大的，则 把他移除
    if (prevOne === queue[0]) {
      queue.shift();
    }

    while (true) {
      if (queue.length && newOne > (queue.at(-1) as number)) {
        queue.pop();
        continue;
      }
      queue.push(newOne);
      break;
    }

    // 1 - 0  正常是 k = 2
    if (r - l < k - 1) {
      r++;
    } else {
      result.push(queue[0]);
      l++;
      r++;
    }
  }
  return result;
}
// @lc code=end
