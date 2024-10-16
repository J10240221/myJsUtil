/*
 * @lc app=leetcode.cn id=54 lang=typescript
 *
 * [54] 螺旋矩阵
 *
 * https://leetcode.cn/problems/spiral-matrix/description/
 *
 * algorithms
 * Medium (51.86%)
 * Likes:    1771
 * Dislikes: 0
 * Total Accepted:    607.2K
 * Total Submissions: 1.2M
 * Testcase Example:  '[[1,2,3],[4,5,6],[7,8,9]]'
 *
 * 给你一个 m 行 n 列的矩阵 matrix ，请按照 顺时针螺旋顺序 ，返回矩阵中的所有元素。
 *
 * 示例 1：
 * 输入：matrix =
 *  [
 *    [1,2,3],
 *    [4,5,6],
 *    [7,8,9]]
 * 输出：[1,2,3,6,9,8,7,4,5]
 *
 *
 * 示例 2：
 *
 *
 * 输入：matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
 * 输出：[1,2,3,4,8,12,11,10,9,5,6,7]
 *
 *
 *
 *
 * 提示：
 *
 *
 * m == matrix.length
 * n == matrix[i].length
 * 1
 * -100
 *
 *
 */

// @lc code=start
/**
 * 思路：  右下左上的方式剪切原数组，直到数组为空
 * @param matrix
 * @returns
 */
function spiralOrder1(matrix: number[][]): number[] {
  /*
   *  [
   *    [1,2,3],
   *    [4,5,6],
   *    [7,8,9]
   *  ]
   */
  const loopDirection = ['right', 'down', 'left', 'up'] as const;
  let loopIdx = -1;
  const getNextDirection = () => {
    loopIdx++;
    const idx = loopIdx % 4;
    return loopDirection[idx];
  };
  const result: number[] = [];
  while (matrix.length > 0) {
    const direction = getNextDirection();
    let target: number[] = [];
    switch (direction) {
      case 'right': {
        target = matrix.shift()!;
        break;
      }
      case 'down': {
        matrix.forEach((it) => {
          const removeItem = it.splice(-1, 1)[0];
          target.push(removeItem);
        });
        break;
      }
      case 'left': {
        target = matrix.pop()!.reverse();
        break;
      }
      case 'up': {
        // 需要修改数组
        matrix.forEach((it) => {
          const removeItem = it.splice(0, 1)[0];
          target.unshift(removeItem);
        });
        break;
      }

      default: {
        break;
      }
    }
    result.push(...target);
  }

  // 最后好像会有一些 undefined ，直接过滤掉？
  return result;
}

/**
 * 思路： 定义右下上左 个边界index，每次完成一个边的遍历 更新边界
 * @param matrix
 */
function spiralOrder(matrix: number[][]): number[] {
  let upBoundaryIndex = 0;
  let rightBoundaryIndex = matrix[0].length - 1;
  let downBoundaryIndex = matrix.length - 1;
  let leftBoundaryIndex = 0;
  const result: number[] = [];

  while (true) {
    // 上右下左 依次遍历

    // 上
    for (let index = leftBoundaryIndex; index <= rightBoundaryIndex; index++) {
      const element = matrix[upBoundaryIndex][index];
      result.push(element);
    }
    upBoundaryIndex++;
    if (upBoundaryIndex > downBoundaryIndex) break;

    // 右
    for (let index = upBoundaryIndex; index <= downBoundaryIndex; index++) {
      const element = matrix[index][rightBoundaryIndex];
      result.push(element);
    }
    rightBoundaryIndex--;
    if (rightBoundaryIndex < leftBoundaryIndex) break;

    // 下
    for (let index = rightBoundaryIndex; index >= leftBoundaryIndex; index--) {
      const element = matrix[downBoundaryIndex][index];
      result.push(element);
    }
    downBoundaryIndex--;
    if (downBoundaryIndex < upBoundaryIndex) break;

    // 左
    for (let index = downBoundaryIndex; index >= upBoundaryIndex; index--) {
      const element = matrix[index][leftBoundaryIndex];
      result.push(element);
    }
    leftBoundaryIndex++;
    if (leftBoundaryIndex > rightBoundaryIndex) break;
  }
  return result;
}

// @lc code=end
