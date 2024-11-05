/*
 * @lc app=leetcode.cn id=20 lang=typescript
 *
 * [20] 有效的括号
 *
 * https://leetcode.cn/problems/valid-parentheses/description/
 *
 * algorithms
 * Easy (44.31%)
 * Likes:    4580
 * Dislikes: 0
 * Total Accepted:    2M
 * Total Submissions: 4.5M
 * Testcase Example:  '"()"'
 *
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
 *
 * 有效字符串需满足：
 *
 *
 * 左括号必须用相同类型的右括号闭合。
 * 左括号必须以正确的顺序闭合。
 * 每个右括号都有一个对应的相同类型的左括号。
 *
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：s = "()"
 *
 * 输出：true
 *
 *
 * 示例 2：
 *
 *
 * 输入：s = "()[]{}"
 *
 * 输出：true
 *
 *
 * 示例 3：
 *
 *
 * 输入：s = "(]"
 *
 * 输出：false
 *
 *
 * 示例 4：
 *
 *
 * 输入：s = "([])"
 *
 * 输出：true
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= s.length <= 10^4
 * s 仅由括号 '()[]{}' 组成
 *
 *
 */

// @lc code=start
/**
 * 思路 使用栈，字符串依次入栈
 * helpObj = 左括号 为key， 右括号为 val
 * 优先入栈的必然是 左括号，否则就异常，然后右括号去抵消 */
function isValid(s: string): boolean {
  const obj: Record<string, string> = {
    '(': ')',
    '[': ']',
    '{': '}',
  };

  const left = Object.keys(obj);

  const stack: string[] = [];
  for (const element of s) {
    const lastEle = stack.at(-1);
    if (lastEle && obj[lastEle] === element) {
      stack.pop();
    } else if (!left.includes(element)) {
      return false;
    } else {
      stack.push(element);
    }
  }

  return stack.length === 0;
}
// @lc code=end
