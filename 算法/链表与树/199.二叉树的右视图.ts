/*
 * @lc app=leetcode.cn id=199 lang=typescript
 *
 * [199] 二叉树的右视图
 *
 * https://leetcode.cn/problems/binary-tree-right-side-view/description/
 *
 * algorithms
 * Medium (68.18%)
 * Likes:    1150
 * Dislikes: 0
 * Total Accepted:    521.1K
 * Total Submissions: 759.7K
 * Testcase Example:  '[1,2,3,null,5,null,4]'
 *
 * 给定一个二叉树的 根节点 root，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：root = [1,2,3,null,5,null,4]
 *
 * 输出：[1,3,4]
 *
 * 解释：
 *
 *
 *
 *
 * 示例 2：
 *
 *
 * 输入：root = [1,2,3,4,null,null,null,5]
 *
 * 输出：[1,3,4,5]
 *
 * 解释：
 *
 *
 *
 *
 * 示例 3：
 *
 *
 * 输入：root = [1,null,3]
 *
 * 输出：[1,3]
 *
 *
 * 示例 4：
 *
 *
 * 输入：root = []
 *
 * 输出：[]
 *
 *
 *
 *
 * 提示:
 *
 *
 * 二叉树的节点个数的范围是 [0,100]
 * -100 <= Node.val <= 100
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
 * 层序遍历，然后取每一层的最末尾一个节点的值，同时储备下一层的所有节点
 * @param root
 */
function rightSideView(root: TreeNode | null): number[] {
  if (!root) return [];
  let currLevelNodes: TreeNode[] = [root];
  const result: number[] = [];
  while (currLevelNodes.length > 0) {
    const nextLevelNodes: TreeNode[] = [];

    currLevelNodes.forEach((it) => {
      if (it.left) nextLevelNodes.push(it.left);
      if (it.right) nextLevelNodes.push(it.right);
    });

    result.push(currLevelNodes.at(-1)!.val);

    currLevelNodes = nextLevelNodes;
  }

  return result;
}
// @lc code=end
