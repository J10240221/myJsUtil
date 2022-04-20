/* 
给你二叉树的根节点 root ，返回其节点值的 层序遍历 。 （即逐层地，从左到右访问所有节点）。

 

示例 1：


输入：root = [3,9,20,null,null,15,7]
输出：[[3],[9,20],[15,7]]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/binary-tree-level-order-traversal
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

// 自己做出来的
function levelOrder(root: TreeNode | null): number[][] {
  const result: number[][] = [];

  function getSingleLevel(queue: TreeNode[]) {
    let ret: number[] = [];
    let currTask: TreeNode | null;

    const nextQueue: TreeNode[] = [];
    while ((currTask = queue.shift())) {
      if (currTask.val !== undefined) {
        ret.push(currTask.val);
      }

      if (currTask.left) {
        nextQueue.push(currTask.left);
      }
      if (currTask.right) {
        nextQueue.push(currTask.right);
      }
    }

    if (ret.length > 0) {
      result.push(ret);
    }

    if (nextQueue.length > 0) {
      getSingleLevel(nextQueue);
    }
  }
  getSingleLevel([root]);

  return result;
}
