/* 
给你一个二叉树的根节点 root ，判断其是否是一个有效的二叉搜索树。

有效 二叉搜索树定义如下：

节点的左子树只包含 小于 当前节点的数。
节点的右子树只包含 大于 当前节点的数。
所有左子树和右子树自身必须也是二叉搜索树。
 

示例 1：


输入：root = [2,1,3]
输出：true
示例 2：


输入：root = [5,1,4,null,null,3,6]
输出：false
解释：根节点的值是 5 ，但是右子节点的值是 4 。

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/validate-binary-search-tree
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */

/* 


     6 
  4     8
 3 5   7 9

 前序 6 4 3 5 8 7 9
 中序 3 4 5 6 7 8 9 (从小到大)
 后续 3 5 4 7 9 8 6 
 
 思路：中序遍历 之后，二叉搜索树 就是 递增排序的

中序遍历时，判断当前节点是否大于中序遍历的前一个节点，如果大于，说明满足 BST，继续遍历；否则直接返回 false。 */
/*

 */

function isValidBST(root: TreeNode | null): boolean {
  let pre = Number.MIN_VALUE;
  if (root?.val == null) {
    return true;
  }
  // 访问左子树
  if (!isValidBST(root.left)) {
    return false;
  }
  // 访问当前节点：如果当前节点小于等于中序遍历的前一个节点，说明不满足BST，返回 false；否则继续遍历。
  if (root.val <= pre) {
    return false;
  }
  pre = root.val;
  // 访问右子树
  return isValidBST(root.right);
}
// 测试用例 好像 有几个没跑过
