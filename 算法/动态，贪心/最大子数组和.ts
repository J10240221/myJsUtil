/* 
给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

子数组 是数组中的一个连续部分。

示例 1：
输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
输出：6
解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。

示例 2：
输入：nums = [1]
输出：1

示例 3：
输入：nums = [5,4,-1,7,8]
输出：23

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/maximum-subarray
 */

// dp[i]：表示以 nums[i] 结尾 的 连续 子数组的最大和。

// 说明：「结尾」和「连续」是关键

// 本题的关键，在于 找到 “无后效性”的子问题
function maxSubArray(nums: number[]): number {
  if (nums.length <= 1) return nums[0] ?? 0;

  // 定义 dp【i】 的值 = 以当前 i项 作为 子数组【结尾】的最大和的值，符合“无后效性”
  const dp: number[] = [nums[0]];
  // 如果 dp[i] = Max( dp[i - 1] + dp[i], dp[i] )

  for (let i = 1; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);
  }

  return Math.max(...dp);
}
