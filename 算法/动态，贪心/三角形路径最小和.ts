/* 
给定一个三角形 triangle ，找出自顶向下的最小路径和。

每一步只能移动到下一行中相邻的结点上。相邻的结点 在这里指的是 下标 与 上一层结点下标 相同或者等于 上一层结点下标 + 1 的两个结点。也就是说，如果正位于当前行的下标 i ，那么下一步可以移动到下一行的下标 i 或 i + 1 。

 

示例 1：

输入：triangle = [[2],[3,4],[6,5,7],[4,1,8,3]]
输出：11
解释：如下面简图所示：
   2
  3 4
 6 5 7
4 1 8 3
自顶向下的最小路径和为 11（即，2 + 3 + 5 + 1 = 11）。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/triangle
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */

/**
 * 递归版本
 * 公式： f(i,j) = min(f(i+1,j),f(i+1,j+1))+triangle[i][j]
 *
 * TODO: 可以先这样实现，再升级成 添加memo 的版本
 *
 * @param triangle
 * @returns
 */
function minimumTotal(triangle: number[][]): number {
  // 递归，下一行的 min
  const dfs = (r: number, c: number): number => {
    if (r === triangle.length) return 0;

    const currMin = triangle[r][c];
    return currMin + Math.min(dfs(r + 1, c), dfs(r + 1, c + 1));
  };

  return dfs(0, 0);
}

// 添加 memo 版本
function minimumTotal2(triangle: number[][]): number {
  const tailLen = triangle[triangle.length - 1].length;
  const memoHelp: (number | null)[][] = new Array(tailLen)
    .fill(0)
    .map((_) => new Array(tailLen).fill(null));

  // 递归，下一行的 min
  const dfs = (r: number, c: number): number => {
    if (r === triangle.length) return 0;

    if (memoHelp[r][c] !== null) {
      return memoHelp[r][c];
    }

    const currMin = triangle[r][c];
    const result = currMin + Math.min(dfs(r + 1, c), dfs(r + 1, c + 1));
    memoHelp[r][c] = result;
    return result;
  };

  return dfs(0, 0);
}

// ✅dp 终极版本，核心思想就是 从下往上 可以实现 “无后效性”
function minimumTotal3(triangle: number[][]): number {
  let tailLen = triangle.length;
  // 从下往上
  const dp: number[][] = new Array(tailLen + 1)
    .fill(0)
    .map((_) => new Array(tailLen + 1).fill(0));
  for (let r = tailLen - 1; r >= 0; r--) {
    for (let c = 0; c <= r; c++) {
      dp[r][c] = triangle[r][c] + Math.min(dp[r + 1][c], dp[r + 1][c + 1]);
    }
  }
  return dp[0][0];
}
