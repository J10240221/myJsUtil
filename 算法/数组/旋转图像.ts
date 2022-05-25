/**
 * 对于矩阵中第 i 行的第 j 个元素，在旋转后，它出现在倒数第 i 列的第 j 个位置。

翻译成代码。由于矩阵中的行列从0 开始计数，因此对于矩阵中的元素 matrix[row][col]，在旋转后为 new[col][n−row−1]。

作者：LeetCode-Solution
链接：https://leetcode.cn/problems/rotate-image/solution/xuan-zhuan-tu-xiang-by-leetcode-solution-vu3m/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
 */
var rotate = function (matrix): void {
  const n = matrix.length;
  const matrix_new = new Array(n).fill(0).map(() => new Array(n).fill(0));
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      matrix_new[j][n - i - 1] = matrix[i][j];
    }
  }
  // 按要求 不返回， TODO: 如果可以返回的话，下面可以省略
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      matrix[i][j] = matrix_new[i][j];
    }
  }

};
