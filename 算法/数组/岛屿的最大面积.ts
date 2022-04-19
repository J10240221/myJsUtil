/* 
给你一个大小为 m x n 的二进制矩阵 grid 。

岛屿 是由一些相邻的 1 (代表土地) 构成的组合，这里的「相邻」要求两个 1 必须在 水平或者竖直的四个方向上 相邻。你可以假设 grid 的四个边缘都被 0（代表水）包围着。

岛屿的面积是岛上值为 1 的单元格的数目。

计算并返回 grid 中最大的岛屿面积。如果没有岛屿，则返回面积为 0

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/max-area-of-island
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 *
 * @param grid
 * @returns
 */
function maxAreaOfIsland(grid: number[][]): number {
  let ret = 0;
  for (let row = 0; row < grid.length; row++) {
    const currRow = grid[row];
    for (let col = 0; col < currRow.length; col++) {
      ret = Math.max(ret, dfs(row, col));
    }
  }

  function dfs(r: number, c: number): number {
    if (grid[r][c] === 0) {
      return 0;
    }

    // 处理过的就重置为0，避免 多次使用
    grid[r][c] = 0;
    let result = 1;
    // 上下左右
    if (grid[r - 1]?.[c]) {
      result += dfs(r - 1, c);
    }
    if (grid[r + 1]?.[c]) {
      result += dfs(r + 1, c);
    }
    if (grid[r][c - 1]) {
      result += dfs(r, c - 1);
    }
    if (grid[r][c + 1]) {
      result += dfs(r, c + 1);
    }

    return result;
  }

  return ret;
}

const demo2 = [
  [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
];

console.log(maxAreaOfIsland(demo2));
