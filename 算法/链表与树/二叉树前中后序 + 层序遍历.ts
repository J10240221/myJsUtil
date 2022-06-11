class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

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

// 【前中后】 的意思是 【根节点】被访问的【前中后】，然后左树永远比右树先访问

// 前序 根节点——左子树——右子树
function preorderTraversal(root: TreeNode | null, ret: number[] = []): number[] {
  if (root?.val) {
    ret.push(root.val);
    preorderTraversal(root?.left, ret);
    preorderTraversal(root?.right, ret);
  }
  return ret;
}

const arr = [6, 4, 8, 3, 5, 7, 9];
/*
     6 
  4     8
 3 5   7 9

 前序 6 4 3 5 8 7 9
 中序 3 4 5 6 7 8 9 (从小到大)
 后续 3 5 4 7 9 8 6 
 */

// 中序：左子树——根节点——右子树
function inorderTraversal(root: TreeNode | null, ret: number[] = []): number[] {
  if (root) {
    inorderTraversal(root?.left, ret);
    ret.push(root.val);
    inorderTraversal(root?.right, ret);
  }
  return ret;
}

// 后序 左子树——右子树——根节点
function postorderTraversal(root: TreeNode | null, ret: number[] = []): number[] {
  if (root?.val) {
    postorderTraversal(root?.left, ret);
    postorderTraversal(root?.right, ret);
    ret.push(root.val);
  }
  return ret;
}

/* ========== 层序遍历 =========== */

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
