// dp[r][c] = min(左上， 左，上) + 1
// 抄的
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
