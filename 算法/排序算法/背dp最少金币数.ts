/*
给定不同面额的硬币 coins 和一个总金额 amount。
编写一个函数来计算可以凑成总金额所需的最少的硬币个数。
如果没有任何一种硬币组合能组成总金额，返回 -1。
你可以认为每种硬币的数量是无限的。

 

示例 1：
输入：coins = [1, 2, 5], amount = 11
输出：3 
解释：11 = 5 + 5 + 1

示例 2：
输入：coins = [2], amount = 3
输出：-1

示例 3：
输入：coins = [1], amount = 0
输出：0

示例 4：
输入：coins = [1], amount = 1
输出：1

示例 5：
输入：coins = [1], amount = 2
输出：2
 

提示：

1 <= coins.length <= 12
1 <= coins[i] <= 231 - 1
0 <= amount <= 104

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/gaM7Ch
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */

/**
 * 思路：
 * f金额 = 某1种情况 + min{ f（金额 - 某1种的金额）}
 *
 * 动态规划：
 * 从金额 1 ，2，3.。。amount 每一个金额的 min算出来，当 (某一种 + 之前的 === amount) 即可
 */

//
// f(x) = min(f(x- i) + 1)
// 从 1元 最小，2，3，4，。。。amount 就出来了

function coinChange(coins: number[], amount: number): number {
  /**
   * 如 coins = [2,3] , amount = 5
   *           0 1 2 3 4 5
   * (2) 0     0 0 1 0 2 0
   * (3) 1     0 0 1 1 2 1
   *
   * f金额 = 某1种情况 + min{ f（金额 - 某1种的金额）}
   *
   */

  const bestCase = new Map<number, number>();
  bestCase.set(0, 0);
  let i = 1;
  while (i <= amount) {
    coins.forEach((coin) => {
      const isOk = bestCase.get(i - coin) !== undefined;
      if (isOk) {
        const minVal = Math.min(
          bestCase.get(i) || Number.MAX_VALUE,
          bestCase.get(i - coin)! + 1
        );
        bestCase.set(i, minVal);
      }
    });

    i++;
  }

  return bestCase.get(amount) ?? -1;
}

const coins = [1];
const amount = 0;

console.log(coinChange(coins, amount));
