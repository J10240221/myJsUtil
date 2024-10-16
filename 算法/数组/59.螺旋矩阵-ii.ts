/*
 * @lc app=leetcode.cn id=59 lang=typescript
 *
 * [59] 螺旋矩阵 II
 *
 * https://leetcode.cn/problems/spiral-matrix-ii/description/
 *
 * algorithms
 * Medium (70.74%)
 * Likes:    1340
 * Dislikes: 0
 * Total Accepted:    470.5K
 * Total Submissions: 665.3K
 * Testcase Example:  '3'
 *
 * 给你一个正整数 n ，生成一个包含 1 到 n^2 所有元素，且元素按顺时针顺序螺旋排列的 n x n 正方形矩阵 matrix 。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：n = 3
 * 输出：[[1,2,3],[8,9,4],[7,6,5]]
 *
 *
 * 示例 2：
 *
 *
 * 输入：n = 1
 * 输出：[[1]]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1
 *
 *
 */

// @lc code=start
/**
 * 思路： // → ↓ ← ↑ 四个方向依次去填充matrix， 直到 currN <= n * n
 * @param n
 * @returns
 */
function generateMatrix(n: number): number[][] {
  // 生成 n*n 的二维数组
  const matrix: number[][] = new Array(n).fill(null).map(() => new Array(n).fill(-1));
  // → ↓ ← ↑ 四个方向依次去填充matrix， 直到边界越界
  let topIdx = 0;
  let rightIdx = n - 1;
  let bottomIdx = n - 1;
  let leftIdx = 0;

  let currN = 1;
  while (currN <= n * n) {
    // 上边向 →
    for (let index = leftIdx; index <= rightIdx; index++) {
      matrix[topIdx][index] = currN;
      currN++;
    }
    topIdx++;

    // 右边向 ↓
    for (let index = topIdx; index <= bottomIdx; index++) {
      matrix[index][rightIdx] = currN;
      currN++;
    }
    rightIdx--;

    // 下边向 ←
    for (let index = rightIdx; index >= leftIdx; index--) {
      matrix[bottomIdx][index] = currN;
      currN++;
    }
    bottomIdx--;

    // 左边向 ↑
    for (let index = bottomIdx; index >= topIdx; index--) {
      matrix[index][leftIdx] = currN;
      currN++;
    }
    leftIdx++;
  }

  return matrix;
}

// @lc code=end
