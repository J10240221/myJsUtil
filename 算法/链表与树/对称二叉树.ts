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

type TNode = TreeNode | null;
function isSymmetric(root: TNode): boolean {
  const check = (left: TNode, right: TNode) => {
    if (left === right && left === null) {
      return true;
    }
    if (left === null || right === null) {
      return false;
    }
    return (
      left.val === right.val &&
      check(left.left, right.right) &&
      check(left.right, right.left)
    );
  };

  return check(root, root);
}
