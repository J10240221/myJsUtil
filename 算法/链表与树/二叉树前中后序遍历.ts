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
function preorderTraversal(
  root: TreeNode | null,
  ret: number[] = []
): number[] {
  if (root?.val) {
    ret.push(root.val);
    preorderTraversal(root?.left, ret);
    preorderTraversal(root?.right, ret);
  }
  return ret;
}

const arr = [6, 4, 8, 3, 5, 7, 9]
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
function postorderTraversal(
  root: TreeNode | null,
  ret: number[] = []
): number[] {
  if (root?.val) {
    postorderTraversal(root?.left, ret);
    postorderTraversal(root?.right, ret);
    ret.push(root.val);
  }
  return ret;
}
