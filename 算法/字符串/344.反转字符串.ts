/*
 * @lc app=leetcode.cn id=344 lang=typescript
 *
 * [344] 反转字符串
 *
 * https://leetcode.cn/problems/reverse-string/description/
 *
 * algorithms
 * Easy (80.56%)
 * Likes:    922
 * Dislikes: 0
 * Total Accepted:    963.6K
 * Total Submissions: 1.2M
 * Testcase Example:  '["h","e","l","l","o"]'
 *
 * 编写一个函数，其作用是将输入的字符串反转过来。输入字符串以字符数组 s 的形式给出。
 *
 * 不要给另外的数组分配额外的空间，你必须原地修改输入数组、使用 O(1) 的额外空间解决这一问题。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：s = ["h","e","l","l","o"]
 * 输出：["o","l","l","e","h"]
 *
 *
 * 示例 2：
 *
 *
 * 输入：s = ["H","a","n","n","a","h"]
 * 输出：["h","a","n","n","a","H"]
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= s.length <= 10^5
 * s[i] 都是 ASCII 码表中的可打印字符
 *
 *
 */

// @lc code=start
/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
  const len = s.length;
  const mid = Math.ceil(len / 2) - 1;
  /* 考虑奇数
    1 2 3 4 5
    i = 0, 1, 2

    考虑偶数
    1 2 3 4 5 6
    i = 0, 1, 2
    所以得出 const mid = Math.ceil(len / 2) - 1; && 且 i<=mid
   */
  let i = 0;
  while (i <= mid && i < len) {
    const head = s[i];
    const tail = s[len - i - 1];
    s[i] = tail;
    s[len - i - 1] = head;
    i++;
  }
}
// @lc code=end
reverseString(['h', 'e', 'l', 'l', 'o']);
