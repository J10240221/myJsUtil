/**
 *
 * 题目：
 * 对于一组不同重量、不可分割的物品，我们需要选择一些装入背包，在满足背包最大重量限制的前提下，背包中物品总重量的最大值是多少呢？
 * @param weight 物品重量
 * @param w 背包可承载重量
 * 
 * 
 * 如果 weight = [2,4]； w = 5
 *  
 *    0 1 2 3 4 5 ------（重量行）
   0  √ × √ × × ×
 * 1  √ × √ × √ × 
 * 
（物品序号列）
从第一行，并且 从左往右 依次 填充推导，这样实现 每次新数据的依赖 都已完成 填充


******核心思想******
把问题 拆分 成 同类的更小的子问题，
第一个问题 很容易解决
然后下一个问题可以通过利用上一个问题的解来推导。
这是动态规划的关键

不过一般来说 动态规划是一种空间换时间的解决思路；缓存了 一些结果
 */
function knapsack(weight: number[], w: number) {
  // 物品数量
  const count = weight.length;
  const dp: (true | undefined)[][] = [];
  // 初始化 dp 数据,并完成 第一列数据的填充
  weight.forEach((e, i) => {
    dp.push([true]); // 第一个点 代表 0重量 肯定是 真
    if (i === 0) {
      dp[i][weight[i]] = true;
    }
  });

  // row ---> 物品序号，weight[row] --> 物品重量
  for (let row = 1; row < count; row++) {
    // col  ---> 列标识的重量
    for (let col = 0; col <= w; col++) {
      const prvRow_colVal = dp[row - 1][col];
      if (prvRow_colVal) {
        dp[row][col] = prvRow_colVal; // 这个物品，【不装】入背包

        if (col + weight[row] <= w) {
          dp[row][col + weight[row]] = true; // 这个物品，【装】入背包
        }
      }
    }
  }

  // 找到 为 true 的最大的 weight col,只需要 遍历 最后一行 即可
  for (let col = w; col >= 0; col--) {
    if (dp[count - 1][col]) {
      const max = col;
      console.log(dp);
      console.log(max);
      return max;
    }
  }
}

const wei = [2, 4, 3, 4];
const w = 12;
knapsack(wei, w);
