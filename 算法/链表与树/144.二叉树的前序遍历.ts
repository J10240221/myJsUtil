/*
 * @lc app=leetcode.cn id=144 lang=typescript
 *
 * [144] 二叉树的前序遍历
 *
 * https://leetcode.cn/problems/binary-tree-preorder-traversal/description/
 *
 * algorithms
 * Easy (72.38%)
 * Likes:    1290
 * Dislikes: 0
 * Total Accepted:    1.2M
 * Total Submissions: 1.6M
 * Testcase Example:  '[1,null,2,3]'
 *
 * 给你二叉树的根节点 root ，返回它节点值的 前序 遍历。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：root = [1,null,2,3]
 *
 * 输出：[1,2,3]
 *
 * 解释：
 *
 *
 *
 *
 * 示例 2：
 *
 *
 * 输入：root = [1,2,3,4,5,null,8,null,null,6,7,9]
 *
 * 输出：[1,2,4,5,6,7,3,8,9]
 *
 * 解释：
 *
 *
 *
 *
 * 示例 3：
 *
 *
 * 输入：root = []
 *
 * 输出：[]
 *
 *
 * 示例 4：
 *
 *
 * 输入：root = [1]
 *
 * 输出：[1]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 树中节点数目在范围 [0, 100] 内
 * -100 <= Node.val <= 100
 *
 *
 *
 *
 * 进阶：递归算法很简单，你可以通过迭代算法完成吗？
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
 * 递归版本
 */
function preorderTraversal1(root: TreeNode | null): number[] {
  const traversal = (r: TreeNode | null, res: number[]): void => {
    if (r === null) return;
    res.push(r.val);
    traversal(r.left, res);
    traversal(r.right, res);
  };
  const result: number[] = [];
  traversal(root, result);
  return result;
}
/**
 * 迭代版本
 * 考虑如下二叉树
 *      5
 *     4 6
 *    1 2
 * 执行结果为： 5 4 1 2 6
 *
 * 压栈情况为
 * ① [5]  --------> 5
 * ② [6, 4] ------> 5 4
 * ③ [6, 2, 1] ---> 5 4 1
 * ③ [6, 2] ------> 5 4 1 2
 * ③ [6] ---------> 5 4 1 2 6
 * 所以需要 先压右侧再压左侧
 *
 */
function preorderTraversal(root: TreeNode | null): number[] {
  const result: number[] = [];
  const contextStack: TreeNode[] = [];

  if (root === null) return result;

  contextStack.push(root);

  while (contextStack.length) {
    const currContext = contextStack.pop()!;
    result.push(currContext.val);
    // 先压栈的。后执行，所以先压 右栈，再左栈

    if (currContext.right) {
      contextStack.push(currContext.right);
    }
    if (currContext.left) {
      contextStack.push(currContext.left);
    }
  }

  return result;
}
// @lc code=end
