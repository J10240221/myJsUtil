/*
 * @lc app=leetcode.cn id=107 lang=typescript
 *
 * [107] 二叉树的层序遍历 II
 *
 * https://leetcode.cn/problems/binary-tree-level-order-traversal-ii/description/
 *
 * algorithms
 * Medium (74.67%)
 * Likes:    823
 * Dislikes: 0
 * Total Accepted:    370.7K
 * Total Submissions: 495.4K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 给你二叉树的根节点 root ，返回其节点值 自底向上的层序遍历 。 （即按从叶子节点所在层到根节点所在的层，逐层从左向右遍历）
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：root = [3,9,20,null,null,15,7]
 * 输出：[[15,7],[9,20],[3]]
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
 *        1
 *      2   3
 *         4  5
 *        6 7
 *
 * --->
 * [
 * [6,7],
 * [4,5],
 * [2,3],
 * 1
 * ]
 *
 * 思路：还是从上往下，最后在 扭转一下即可
 */
function levelOrderBottom(root: TreeNode | null): number[][] {
  if (!root) return [];
  let currLevel: TreeNode[] = [root];

  const result: number[][] = [];
  while (currLevel.length > 0) {
    const currLevelResult: number[] = [];
    const nextLevelNodeList: TreeNode[] = [];

    currLevel.forEach((it) => {
      currLevelResult.push(it.val);
      if (it.left) nextLevelNodeList.push(it.left);
      if (it.right) nextLevelNodeList.push(it.right);
    });
    result.push(currLevelResult);

    currLevel = nextLevelNodeList;
  }

  return result.reverse();
}
// @lc code=end
