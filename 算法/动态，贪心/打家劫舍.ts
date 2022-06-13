/* 
你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。

给定一个代表每个房屋存放金额的非负整数数组，计算你 不触动警报装置的情况下 ，一夜之内能够偷窃到的最高金额。

 

示例 1：

输入：[1,2,3,1]
输出：4
解释：偷窃 1 号房屋 (金额 = 1) ，然后偷窃 3 号房屋 (金额 = 3)。
     偷窃到的最高金额 = 1 + 3 = 4 。
示例 2：

输入：[2,7,9,3,1]
输出：12
解释：偷窃 1 号房屋 (金额 = 2), 偷窃 3 号房屋 (金额 = 9)，接着偷窃 5 号房屋 (金额 = 1)。
     偷窃到的最高金额 = 2 + 9 + 1 = 12 。

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/house-robber
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * 思路：dp
 * [        2,  7,  9,  3,  1,  4]
 * dp的idx  0   1   2   3   4    5  最后一位：(nums.length-1)
 * dp[idx]  2   7   11  11  12  15
 * dp[n] = Max(dp[n-2] + nums[n], dp[n-1])
 * @param nums
 */
function rob(nums: number[]): number {
  if (nums.length === 0) return 0;
  // if (nums.length === 1) return nums[0];
  // if (nums.length === 2) return Math.max(nums[0], nums[1]);

  const dp: number[] = [];
  dp[-2] = 0; // 设置哨兵
  dp[-1] = 0; // 设置哨兵 后， 下面的 dp[0] 和 dp[1] 就可以不用特殊处理了
  // dp[0] = nums[0];
  // dp[1] = Math.max(dp[0], nums[1]);

  let idx = 0;
  const len = nums.length;
  while (idx < len) {
    const currVal = nums[idx];
    dp[idx] = Math.max(dp[idx - 2] + currVal, dp[idx - 1]);
    idx++;
  }

  console.log(dp);
  return dp[len - 1];
}

const d = [1, 2, 3, 1];

rob(d);

/**
 * !!!!!!!!忽略此版本
 * dfs 版本，复杂度 特别高，因为很多重复计算
 * @param nums
 * @returns
 */
function robDfs(nums: number[]): number {
  if (nums.length === 0) return 0;

  let result: number[] = [];
  let args: any[] = [];

  dfs(1, 0, false);
  dfs(1, nums[0], true);

  function dfs(currIdx: number, prevSum: number, prevRobed: boolean) {
    const currVal = nums[currIdx];
    if (currIdx > nums.length) {
      result.push(prevSum);
      return;
    }

    if (prevRobed) {
      dfs(currIdx + 1, prevSum, false);
    } else {
      dfs(currIdx + 1, prevSum + currVal, true);
      dfs(currIdx + 1, prevSum, false);
    }
  }

  console.log(Math.max(...result.filter(Boolean)));
  console.log(result);
  return Math.max(...result.filter(Boolean));
}

robDfs([1, 2, 3, 5, 3]);
