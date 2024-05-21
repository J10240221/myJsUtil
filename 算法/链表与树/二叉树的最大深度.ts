class TreeNode2 {
  val: number;
  left: TreeNode2 | null;
  right: TreeNode2 | null;
  constructor(val?: number, left?: TreeNode2 | null, right?: TreeNode2 | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

/**
 * 采用递归去解决
 * 【后序遍历】，实现优先拿到堆栈顶，也就是叶子节点的数据，
 * 然后由 叶子节点 向根节点不断累加得出结果 */
function maxDepth1(root: TreeNode2 | null): number {
  if (root === null) {
    return 0;
  }

  const leftV = maxDepth(root.left);
  const rightV = maxDepth(root.right);
  const maxDep = Math.max(leftV, rightV) + 1;

  return maxDep;
}

/** 采用遍历去解决 */
function maxDepth(root: TreeNode2 | null): number {
  let maxDep = 0;
  const traverse = (root: TreeNode2 | null, currDepth: number) => {
    if (root === null) {
      return;
    }
    currDepth++;
    maxDep = Math.max(currDepth, maxDep);
    traverse(root.left, currDepth);
    traverse(root.right, currDepth);
    currDepth--;
  };

  traverse(root, 0);

  console.log(maxDep);
  return maxDep;
}

const r = new TreeNode2(1, new TreeNode2(), new TreeNode2(2));

maxDepth(r);
