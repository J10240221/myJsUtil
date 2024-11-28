/*
 * @lc app=leetcode.cn id=94 lang=typescript
 *
 * [94] 二叉树的中序遍历
 *
 * https://leetcode.cn/problems/binary-tree-inorder-traversal/description/
 *
 * algorithms
 * Easy (77.41%)
 * Likes:    2153
 * Dislikes: 0
 * Total Accepted:    1.6M
 * Total Submissions: 2.1M
 * Testcase Example:  '[1,null,2,3]'
 *
 * 给定一个二叉树的根节点 root ，返回 它的 中序 遍历 。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：root = [1,null,2,3]
 * 输出：[1,3,2]
 *
 *
 * 示例 2：
 *
 *
 * 输入：root = []
 * 输出：[]
 *
 *
 * 示例 3：
 *
 *
 * 输入：root = [1]
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
 * 进阶: 递归算法很简单，你可以通过迭代算法完成吗？
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
function inorderTraversal1(root: TreeNode | null): number[] {
  const traversal = (r: TreeNode | null, res: number[]): void => {
    if (r === null) return;
    // 中序， 左 中 右
    traversal(r.left, res);
    res.push(r.val);
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
 * 执行结果为： 1 4 2 5 6
 *
 * 压栈情况为
 * [5, 4, 1]  ---没有左子树了-->
 * [5, 4]  -------------弹栈--> 1
 * [5] --进入出栈阶段，4出栈，之后发现4有右子树，入栈-------> 1 4
 * [5, 2] ---------> 1 4
 * [5] ---------> 1 4  2
 * [] -----弹栈后，发现又右子树----> 1 4 2 5
 * [6] ---------> 1 4 2 5
 * [] -----指针和栈均已空----> 1 4 2 5 6
 * ....
 * 总结，
 * ①左树持续入栈，直到终点
 * ②出栈后检查是否有右子树，有的话，继续入栈
 * 继续①；  直到栈空，指针空
 */
function inorderTraversal0(root: TreeNode | null): number[] {
  const result: number[] = [];

  const contextStack: TreeNode[] = [];
  let curr: null | TreeNode = root;

  while (curr || contextStack.length > 0) {
    // 中序遍历：左 中 右
    if (curr) {
      // 递阶段,爬到左子树的最深处
      contextStack.push(curr);
      curr = curr.left;
      continue;
    }
    // 回溯的归阶段, curr 是空的，消费栈内的数据
    curr = contextStack.pop()!;
    result.push(curr.val);

    // 指针转向右侧
    curr = curr.right;
  }
  return result;
}

// @lc code=end
