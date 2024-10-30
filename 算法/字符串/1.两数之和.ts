/*
 * @lc app=leetcode.cn id=1 lang=typescript
 *
 * [1] 两数之和
 *
 * https://leetcode.cn/problems/two-sum/description/
 *
 * algorithms
 * Easy (54.22%)
 * Likes:    19013
 * Dislikes: 0
 * Total Accepted:    5.8M
 * Total Submissions: 10.7M
 * Testcase Example:  '[2,7,11,15]\n9'
 *
 * 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。
 *
 * 你可以假设每种输入只会对应一个答案，并且你不能使用两次相同的元素。
 *
 * 你可以按任意顺序返回答案。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums = [2,7,11,15], target = 9
 * 输出：[0,1]
 * 解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
 *
 *
 * 示例 2：
 *
 *
 * 输入：nums = [3,2,4], target = 6
 * 输出：[1,2]
 *
 *
 * 示例 3：
 *
 *
 * 输入：nums = [3,3], target = 6
 * 输出：[0,1]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 2 <= nums.length <= 10^4
 * -10^9 <= nums[i] <= 10^9
 * -10^9 <= target <= 10^9
 * 只会存在一个有效答案
 *
 *
 *
 *
 * 进阶：你可以想出一个时间复杂度小于 O(n^2) 的算法吗？
 *
 */

// @lc code=start
/**
 * 思路
 * 通过对象，实现 On， 再遍历 nums, 寻找
 */
function twoSum(nums: number[], target: number): number[] {
  // key 为值， value 为index
  const help = new Map<number, number>();
  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];
    const leftV = target - element;
    if (help.has(leftV)) {
      return [index, help.get(leftV)!];
    } else {
      help.set(element, index);
    }
  }
  return [-1, -1];
}

// @lc code=end
