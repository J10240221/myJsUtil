/* 
一只青蛙一次可以跳上1级台阶，也可以跳上2级台阶。求该青蛙跳上一个 n 级的台阶总共有多少种跳法。

答案需要取模 1e9+7（1000000007），如计算初始结果为：1000000008，请返回 1。



来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/qing-wa-tiao-tai-jie-wen-ti-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

function numWays(n: number, memo = {}): number {
  if (n === 0) return 1;
  if (n === 1) return 1;

  if (!memo[n - 1]) {
    memo[n - 1] = numWays(n - 1, memo);
  }
  if (!memo[n - 2]) {
    memo[n - 2] = numWays(n - 2, memo);
  }
  return (memo[n] = (memo[n - 1] + memo[n - 2]) % 1000000007);
}

// dp
function numWays2(n: number): number {
  const dp: number[] = [1, 1];
  for (let i = 2; i <= n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 1000000007;
  }
  console.log(dp);
  return dp[n];
}
