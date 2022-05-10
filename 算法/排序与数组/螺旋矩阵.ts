/* 
给你一个 m 行 n 列的矩阵 matrix ，请按照 顺时针螺旋顺序 ，返回矩阵中的所有元素。

 

示例 1：


输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
输出：[1,2,3,6,9,8,7,4,5]
示例 2：


输入：matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
输出：[1,2,3,4,8,12,11,10,9,5,6,7]

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/spiral-matrix
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * 抄的
 * 思路如下
 * 
 * 这里的方法不需要记录已经走过的路径，所以执行用时和内存消耗都相对较小

首先设定上下左右边界
其次向右移动到最右，此时第一行因为已经使用过了，可以将其从图中删去，体现在代码中就是重新定义上边界
判断若重新定义后，上下边界交错，表明螺旋矩阵遍历结束，跳出循环，返回答案
若上下边界不交错，则遍历还未结束，接着向下向左向上移动，操作过程与第一，二步同理
不断循环以上步骤，直到某两条边界交错，跳出循环，返回答案
C++


作者：youlookdeliciousc
链接：https://leetcode.cn/problems/spiral-matrix/solution/cxiang-xi-ti-jie-by-youlookdeliciousc-3/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
 * @param matrix 
 * @returns 
 */
function spiralOrder(matrix: number[][]): number[] {
  const ret: number[] = [];
  if (matrix.length === 0) return ret; //若数组为空，直接返回答案

  let u = 0; //赋值上下左右边界
  let d = matrix.length - 1;
  let l = 0;
  let r = matrix[0].length - 1;
  while (true) {
    for (let i = l; i <= r; i++) ret.push(matrix[u][i]); //向右移动直到最右
    if (++u > d) break; //重新设定上边界，若上边界大于下边界，则遍历遍历完成，下同
    for (let i = u; i <= d; i++) ret.push(matrix[i][r]); //向下
    if (--r < l) break; //重新设定有边界
    for (let i = r; i >= l; i--) ret.push(matrix[d][i]); //向左
    if (--d < u) break; //重新设定下边界
    for (let i = d; i >= u; i--) ret.push(matrix[i][l]); //向上
    if (++l > r) break; //重新设定左边界
  }
  return ret;
}
