/*
 * @lc app=leetcode.cn id=1047 lang=typescript
 *
 * [1047] 删除字符串中的所有相邻重复项
 *
 * https://leetcode.cn/problems/remove-all-adjacent-duplicates-in-string/description/
 *
 * algorithms
 * Easy (72.92%)
 * Likes:    654
 * Dislikes: 0
 * Total Accepted:    342.5K
 * Total Submissions: 469.6K
 * Testcase Example:  '"abbaca"'
 *
 * 给出由小写字母组成的字符串 s，重复项删除操作会选择两个相邻且相同的字母，并删除它们。
 *
 * 在 s 上反复执行重复项删除操作，直到无法继续删除。
 *
 * 在完成所有重复项删除操作后返回最终的字符串。答案保证唯一。
 *
 *
 *
 * 示例：
 *
 *
 * 输入："abbaca"
 * 输出："ca"
 * 解释：
 * 例如，在 "abbaca" 中，我们可以删除 "bb" 由于两字母相邻且相同，这是此时唯一可以执行删除操作的重复项。之后我们得到字符串
 * "aaca"，其中又只有 "aa" 可以执行重复项删除操作，所以最后的字符串为 "ca"。
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= s.length <= 10^5
 * s 仅由小写英文字母组成。
 *
 *
 */

// @lc code=start
/** 思路：使用栈的思想去处理 */
function removeDuplicates(s: string): string {
  const helpStack: string[] = [];
  for (let i = 0; i < s.length; i++) {
    const element = s[i];
    if (helpStack.at(-1) === element) {
      helpStack.pop();
    } else {
      helpStack.push(element);
    }
  }

  return helpStack.join('');
}
// @lc code=end

/**
 * 换一个 华志林自创的题目，但凡重复的都要删除，如何处理呢
 * 比如 abbbac ----> aac ----> c
 * 考虑 使用栈
 */
function removeDuplicates2(s: string): string {
  let helpStack: string[] = [];
  const repeatArr: [start: number, end: number] = [-1, -1];

  for (let i = 0; i < s.length; i++) {
    const element = s[i];
    const last = helpStack.at(-1);
    if (last === element) {
      repeatArr[0] = repeatArr[0] === -1 ? i - 1 : repeatArr[0];
      repeatArr[1] = i;
    }
    helpStack.push(element);
  }

  const hasRep = repeatArr[0] !== -1;
  if (!hasRep) return s;

  const restStr = s.substring(0, repeatArr[0]) + s.substring(repeatArr[1] + 1);
  return removeDuplicates2(restStr);
}

console.log(removeDuplicates2('bbbb'));
