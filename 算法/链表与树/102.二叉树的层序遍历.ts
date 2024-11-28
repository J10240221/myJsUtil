/*
 * @lc app=leetcode.cn id=102 lang=typescript
 *
 * [102] 二叉树的层序遍历
 *
 * https://leetcode.cn/problems/binary-tree-level-order-traversal/description/
 *
 * algorithms
 * Medium (68.39%)
 * Likes:    2044
 * Dislikes: 0
 * Total Accepted:    1.2M
 * Total Submissions: 1.7M
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 给你二叉树的根节点 root ，返回其节点值的 层序遍历 。 （即逐层地，从左到右访问所有节点）。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：root = [3,9,20,null,null,15,7]
 * 输出：[[3],[9,20],[15,7]]
 *
 *
 * 示例 2：
 *
 *
 * 输入：root = [1]
 * 输出：[[1]]
 *
 *
 * 示例 3：
 *
 *
 * 输入：root = []
 * 输出：[]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 树中节点数目在范围 [0, 2000] 内
 * -1000 <= Node.val <= 1000
 *
 *
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

/**
 * 思路：
 * 遍历自身的时候，把左右节点扔到下一个任务中，确保每次 task 中是所有当前层的 Node
 */
function levelOrder(root: TreeNode | null): number[][] {
  const result: number[][] = [];
  let task: (TreeNode | null)[] = [root];

  while (task.length) {
    const singleLevel: number[] = [];
    // 清空先
    const nextTask: (TreeNode | null)[] = [];
    task.forEach((it) => {
      if (it) {
        singleLevel.push(it.val);
        if (it.left) nextTask.push(it.left);
        if (it.right) nextTask.push(it.right);
      }
    });
    singleLevel.length && result.push(singleLevel);
    if (task.length) {
      task = nextTask;
    }
  }

  return result;
}
// @lc code=end
