// 1 简单题目版本
/* 
给定一个数组 prices ，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格。

你只能选择 某一天 买入这只股票，并选择在 未来的某一个不同的日子 卖出该股票。设计一个算法来计算你所能获取的最大利润。

返回你可以从这笔交易中获取的最大利润。如果你不能获取任何利润，返回 0 。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

// 简单版本
function maxProfit(prices: number[]): number {
  let maxP = 0;
  let lowest = Number.MAX_VALUE;
  for (let i = 0; i < prices.length; i++) {
    const currPrice = prices[i];
    lowest = Math.min(lowest, currPrice);
    maxP = Math.max(maxP, currPrice - lowest);
  }
  return maxP;
}

/**
 * 
 * @param prices 给你一个整数数组 prices ，其中 prices[i] 表示某支股票第 i 天的价格。

在每一天，你可以决定是否购买和/或出售股票。你在任何时候 最多 只能持有 一股 股票。你也可以先购买，然后在 同一天 出售。

返回 你能获得的 最大 利润 。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * @returns 
 */
// 贪心，只要 后一天 比前一天 价格高(有利润), 就操作
function maxProfit2(prices: number[]): number {
  let profit = 0;
  let prevPrices = prices[0];
  for (let i = 1; i < prices.length; i++) {
    const currPrice = prices[i];

    if (currPrice > prevPrices) {
      profit += currPrice - prevPrices;
      prevPrices = currPrice;
    } else {
      prevPrices = currPrice;
    }
  }
  return profit;
}
