/**
 * 考虑通过递归对二叉树进行先序遍历，当遇到节点 p 或 q 时返回。
 * 从底至顶回溯，当节点 p, q 在节点 root 的异侧时，节点 root 即为最近公共祖先，则向上返回 root 。
 * 
 * 
 * 
1、当 left 和 right 同时为空 ：说明 root 的左 / 右子树中都不包含 p,qp,q ，返回 null ；
2、当 left 和 right 同时不为空 ：说明 p, qp,q 分列在 root 的 异侧 （分别在 左 / 右子树），
    因此 root 为最近公共祖先，返回 root ；
3、当 left 为空 ，right 不为空 ：p,q 都不在 root 的左子树中，直接返回 right 。具体可分为两种情况：
    1、p,q 其中一个在 root 的 右子树 中，此时 right 指向 p（假设为 p ）；
    2、p,q 两节点都在 root 的 右子树 中，此时的 right 指向 最近公共祖先节点 ；
4、当 left 不为空 ， right 为空 ：与情况 3. 同理；

 */

function lowestCommonAncestor22(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  function find(root: TreeNode, c: TreeNode) {
    if (root == null) return false;
    if (root.val == c.val) {
      return true;
    }

    return find(root.left, c) || find(root.right, c);
  }

  if (root == null) return null;
  // 如果p,q为根节点，则公共祖先为根节点
  if (root.val == p.val || root.val == q.val) return root;
  // 如果p,q在左子树，则公共祖先在左子树查找
  if (find(root.left, p) && find(root.left, q)) {
    return lowestCommonAncestor22(root.left, p, q);
  }
  // 如果p,q在右子树，则公共祖先在右子树查找
  if (find(root.right, p) && find(root.right, q)) {
    return lowestCommonAncestor22(root.right, p, q);
  }
  // 如果p,q分属两侧，则公共祖先为根节点
  return root;
}
