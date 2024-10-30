/*
 * @lc app=leetcode.cn id=454 lang=typescript
 * @lcpr version=30204
 *
 * [454] 四数相加 II
 

示例 1：

输入：nums1 = [1,2], nums2 = [-2,-1], nums3 = [-1,2], nums4 = [0,2]
输出：2
解释：
两个元组如下：
1. (0, 0, 0, 1) -> nums1[0] + nums2[0] + nums3[0] + nums4[1] = 1 + (-2) + (-1) + 2 = 0
2. (1, 1, 0, 0) -> nums1[1] + nums2[1] + nums3[0] + nums4[0] = 2 + (-1) + (-1) + 0 = 0
示例 2：

输入：nums1 = [0], nums2 = [0], nums3 = [0], nums4 = [0]
输出：1
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * 思路
 * 两两一组， 这样可以是实现 On2 的时间复杂度
 */
function fourSumCount(nums1: number[], nums2: number[], nums3: number[], nums4: number[]): number {
  // 存储的分别是 值 和 次数
  const help = new Map<number, number>();
  nums1.forEach((n) => {
    nums2.forEach((m) => {
      const sum = m + n;
      const times = (help.get(sum) || 0) + 1;
      help.set(sum, times);
    });
  });

  let result = 0;
  nums3.forEach((n) => {
    nums4.forEach((m) => {
      const sum = m + n;
      result += help.get(-sum) || 0;
    });
  });

  return result;
}
// @lc code=end
