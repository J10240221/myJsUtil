/*
 * @lc app=leetcode.cn id=543 lang=typescript
 *
 * [543] 二叉树的直径
 *
 * https://leetcode.cn/problems/diameter-of-binary-tree/description/
 *
 * algorithms
 * Easy (61.44%)
 * Likes:    1635
 * Dislikes: 0
 * Total Accepted:    513.2K
 * Total Submissions: 831.8K
 * Testcase Example:  '[1,2,3,4,5]'
 *
 * 给你一棵二叉树的根节点，返回该树的 直径 。
 *
 * 二叉树的 直径 是指树中任意两个节点之间最长路径的 长度 。这条路径可能经过也可能不经过根节点 root 。
 *
 * 两节点之间路径的 长度 由它们之间边数表示。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：root = [1,2,3,4,5]
 * 输出：3
 * 解释：3 ，取路径 [4,2,1,3] 或 [5,2,1,3] 的长度。
 *
 *
 * 示例 2：
 *
 *
 * 输入：root = [1,2]
 * 输出：1
 *
 *
 *
 *
 * 提示：
 *
 *
 * 树中节点数目在范围 [1, 10^4] 内
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
 * 思考，直径，可以转换成 求 【（每个节点的 最大左子树深度 + 最大右子树深度）的最大值】
 * @param root
 */
function diameterOfBinaryTree(root: TreeNode | null): number {
  let diameter = 0;

  /** 
   * 获取当前节点的最大深度
   * 利用后序遍历的位置，去求解最大值
   */
  const maxDep = (node: TreeNode | null): number => {
    if (node === null) return 0;

    const lMaxdepth = maxDep(node.left);
    const rMaxdepth = maxDep(node.right);
    const val = Math.max(lMaxdepth, rMaxdepth);

    const currNodeDiameter = lMaxdepth + rMaxdepth;
    if (diameter < currNodeDiameter) {
      diameter = currNodeDiameter;
    }

    return val + 1;
  };

  maxDep(root);

  return diameter;
}
// @lc code=end
