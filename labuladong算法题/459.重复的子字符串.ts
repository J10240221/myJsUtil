/*
 * @lc app=leetcode.cn id=459 lang=typescript
 *
 * [459] 重复的子字符串
 *
 * https://leetcode.cn/problems/repeated-substring-pattern/description/
 *
 * algorithms
 * Easy (51.89%)
 * Likes:    1221
 * Dislikes: 0
 * Total Accepted:    291.6K
 * Total Submissions: 561.9K
 * Testcase Example:  '"abab"'
 *
 * 给定一个非空的字符串 s ，检查是否可以通过由它的一个子串重复多次构成。
 *
 *
 *
 * 示例 1:
 *
 *
 * 输入: s = "abab"
 * 输出: true
 * 解释: 可由子串 "ab" 重复两次构成。
 *
 *
 * 示例 2:
 *
 *
 * 输入: s = "aba"
 * 输出: false
 *
 *
 * 示例 3:
 *
 *
 * 输入: s = "abcabcabcabc"
 * 输出: true
 * 解释: 可由子串 "abc" 重复四次构成。 (或子串 "abcabc" 重复两次构成。)
 *
 *
 *
 *
 * 提示：
 *
 *
 *
 *
 * 1 <= s.length <= 10^4
 * s 由小写英文字母组成
 *
 *
 */

// @lc code=start
function repeatedSubstringPattern(s: string): boolean {
  for (let i = 1; i <= s.length >> 1; i++) {
    const repeatTimes = s.length / i;

    if (!Number.isInteger(repeatTimes)) continue;

    const element = s.substring(0, i);

    if (element.repeat(repeatTimes) === s) return true;
  }
  return false;
}
// @lc code=end
