/* 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。

 

示例 1：

输入：n = 3
输出：["((()))","(()())","(())()","()(())","()()()"]
示例 2：

输入：n = 1
输出：["()"]


来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/generate-parentheses
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */
/**
 * @param curStr 当前递归得到的结果
 * @param left   左括号剩余个数
 * @param right  右括号剩余个数
 * @param res    结果集
 */
function generateParenthesis(n: number): string[] {
  // 做减法
  const res: string[] = [];
  // 特判
  if (n == 0) {
    return res;
  }

  function dfs(curStr: string, left: number, right: number, res: string[]) {
    // 因为每一次尝试，都使用新的字符串变量，所以无需回溯
    // 在递归终止的时候，直接把它添加到结果集即可，注意与「力扣」第 46 题、第 39 题区分
    if (left == 0 && right == 0) {
      res.push(curStr);
      return;
    }

    // 剪枝（如图，左括号可以使用的个数严格大于右括号可以使用的个数，才剪枝，注意这个细节）
    if (left > right) {
      return;
    }

    if (left > 0) {
      dfs(curStr + "(", left - 1, right, res);
    }

    if (right > 0) {
      dfs(curStr + ")", left, right - 1, res);
    }
  }

  // 执行深度优先遍历，搜索可能的结果
  dfs("", n, n, res);
  return res;
}
