/*
 * @lc app=leetcode.cn id=104 lang=typescript
 *
 * [104] 二叉树的最大深度
 *
 * https://leetcode.cn/problems/maximum-depth-of-binary-tree/description/
 *
 * algorithms
 * Easy (78.06%)
 * Likes:    1905
 * Dislikes: 0
 * Total Accepted:    1.5M
 * Total Submissions: 1.9M
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 给定一个二叉树 root ，返回其最大深度。
 *
 * 二叉树的 最大深度 是指从根节点到最远叶子节点的最长路径上的节点数。
 *
 *
 *
 * 示例 1：
 *
 *
 *
 *
 *
 *
 * 输入：root = [3,9,20,null,null,15,7]
 * 输出：3
 *
 *
 * 示例 2：
 *
 *
 * 输入：root = [1,null,2]
 * 输出：2
 *
 *
 *
 *
 * 提示：
 *
 *
 * 树中节点的数量在 [0, 10^4] 区间内。
 * -100 <= Node.val <= 100
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
 * 递归
 * max = max(left, right) + 1
 * @param root
 */
function maxDepth1(root: TreeNode | null): number {
  if (root === null) return 0;
  const max = Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;

  return max;
}
// @lc code=end

/**
 * 循环
 * @param root
 * @returns
 */

function maxDepth(root: TreeNode | null): number {
  let maxDep = 0;

  let depth = 0;

  const traverse = (node: TreeNode | null) => {
    if (node === null) return;

    depth++;
    if (depth > maxDep) {
      maxDep = depth;
    }

    traverse(node?.left);
    traverse(node?.right);

    depth--;
  };

  traverse(root);

  return maxDep;
}
