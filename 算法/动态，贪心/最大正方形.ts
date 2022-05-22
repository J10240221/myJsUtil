

// const matrix = [
//   ["1", "0", "0"],
//   ["1", "1", "1"],
//   ["1", "1", "1"],
//   ["0", "1", "0"],
// ];
// const dpDemo = [
//   [1, 0, 0],
//   [1, 1, 1],
//   [1, 2, 2],
//   [0, 1, 0],
// ];

// 核心：dp[r][c] = min(左上， 左，上) + 1
// 抄的
// 来源：力扣（LeetCode）
// 链接：https://leetcode.cn/problems/maximal-square
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
function maximalSquare(matrix: string[][]): number {
  if (matrix == null || matrix.length < 1 || matrix[0].length < 1) return 0;

  let height = matrix.length;
  let width = matrix[0].length;
  let maxSide = 0;

  // 新增第一行、第一列均为0,  素有都是 0
  const dp: number[][] = new Array(height + 1)
    .fill(0)
    .map((item) => new Array(width + 1).fill(0));

  for (let row = 0; row < height; row++) {
    for (let col = 0; col < width; col++) {
      if (matrix[row][col] == "1") {
        // dp[r][c] = min(左上， 左，上) + 1
        dp[row + 1][col + 1] =
          Math.min(dp[row + 1][col], dp[row][col + 1], dp[row][col]) + 1;
        maxSide = Math.max(maxSide, dp[row + 1][col + 1]);
      }
    }
  }
  return maxSide * maxSide;
}
