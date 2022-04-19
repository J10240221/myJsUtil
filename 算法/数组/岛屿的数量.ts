/* 
给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。

岛屿总是被水包围，并且每座岛屿只能由水平方向和/或竖直方向上相邻的陆地连接形成。

此外，你可以假设该网格的四条边均被水包围。

 

示例 1：

输入：grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
输出：1
示例 2：

输入：grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
输出：3

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/number-of-islands
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

作者：LeetCode
链接：https://leetcode-cn.com/problems/number-of-islands/solution/dao-yu-shu-liang-by-leetcode/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
 */

function numIslands(grid: string[][]): number {
  if (grid == null || grid.length == 0) {
    return 0;
  }

  let num_islands = 0;
  for (let r = 0; r < grid.length; ++r) {
    for (let c = 0; c < grid[r].length; ++c) {
      if (grid[r][c] == "1") {
        ++num_islands;
        dfs(grid, r, c);
      }
    }
  }

  /**
   * 把所有 连接起来的 1 都重置为 0
   * @param grid
   * @param r
   * @param c
   * @returns
   */
  function dfs(grid: string[][], r: number, c: number) {
    const nr = grid.length;
    const nc = grid[0].length;

    if (r < 0 || c < 0 || r >= nr || c >= nc || grid[r][c] == "0") {
      return;
    }

    grid[r][c] = "0";
    dfs(grid, r - 1, c);
    dfs(grid, r + 1, c);
    dfs(grid, r, c - 1);
    dfs(grid, r, c + 1);
  }

  return num_islands;
}
