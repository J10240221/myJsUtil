// dp[i]：表示以 nums[i] 结尾 的 连续 子数组的最大和。

// 说明：「结尾」和「连续」是关键

// 本题的关键，在于 找到 “无后效性”的子问题，具体详见 题解
function maxSubArray(nums: number[]): number {
  if (nums.length <= 1) return nums.reduce((s, n) => s + n, 0);

  // 定义 dp【i】 的值 = 以当前 i项 作为 子数组【结尾】的最大和的值，符合“无后效性”
  const dp: number[] = [nums[0]];
  // 如果 dp[i] = Max( dp[i - 1] + dp[i], dp[i] )

  for (let i = 1; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);
  }

  return Math.max(...dp);
}
