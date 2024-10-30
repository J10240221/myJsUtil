/*
 * @lc app=leetcode.cn id=18 lang=typescript
 *
 * [18] 四数之和
 *
 * https://leetcode.cn/problems/4sum/description/
 *
 * algorithms
 * Medium (36.62%)
 * Likes:    1984
 * Dislikes: 0
 * Total Accepted:    637.3K
 * Total Submissions: 1.7M
 * Testcase Example:  '[1,0,-1,0,-2,2]\n0'
 *
 * 给你一个由 n 个整数组成的数组 nums ，和一个目标值 target 。请你找出并返回满足下述全部条件且不重复的四元组 [nums[a],
 * nums[b], nums[c], nums[d]] （若两个四元组元素一一对应，则认为两个四元组重复）：
 *
 *
 * 0 <= a, b, c, d < n
 * a、b、c 和 d 互不相同
 * nums[a] + nums[b] + nums[c] + nums[d] == target
 *
 *
 * 你可以按 任意顺序 返回答案 。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums = [1,0,-1,0,-2,2], target = 0
 * 输出：[[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
 *
 *
 * 示例 2：
 *
 *
 * 输入：nums = [2,2,2,2,2], target = 8
 * 输出：[[2,2,2,2]]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= nums.length <= 200
 * -10^9 <= nums[i] <= 10^9
 * -10^9 <= target <= 10^9
 *
 *
 */

// @lc code=start
/**
 * 思路： 每个循环都需要 拍段 index 是否已经重复出现
 */
function fourSum(nums: number[], target: number): number[][] {
  nums.sort((a, b) => a - b);
  const result: number[][] = [];
  for (let i = 0; i < nums.length; i++) {
    // 对 i 去重
    if (nums[i] === nums[i - 1]) continue;
    for (let j = i + 1; j < nums.length; j++) {
      const ele1 = nums[i];
      const ele2 = nums[j];

      // 对j去重；已经重复出现，并且 j -1 >i 是为了确定 上一个出现的是 j自己，而不是i
      if (nums[j] === nums[j - 1] && j - 1 > i) continue;

      let l = j + 1;
      let r = nums.length - 1;
      // TODO: 2个 指针的部分不同重复

      while (l < r) {
        const sum = ele1 + ele2 + nums[l] + nums[r];
        if (sum < target) {
          l++;
        } else if (sum > target) {
          r--;
        } else {
          // sum === 0
          result.push([ele1, ele2, nums[l], nums[r]]);

          l++;
          while (nums[l] === nums[l - 1]) {
            l++;
          }

          r--;
          while (nums[r] === nums[r + 1]) {
            r++;
          }
        }
      }
    }
  }
  return result;
}
// @lc code=end

fourSum([2, 2, 2, 2, 2], 8);
