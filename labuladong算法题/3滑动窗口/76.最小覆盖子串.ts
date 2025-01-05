/*
 * @lc app=leetcode.cn id=76 lang=typescript
 *
 * [76] 最小覆盖子串
 *
 * https://leetcode.cn/problems/minimum-window-substring/description/
 *
 * algorithms
 * Hard (46.33%)
 * Likes:    3015
 * Dislikes: 0
 * Total Accepted:    648.6K
 * Total Submissions: 1.4M
 * Testcase Example:  '"ADOBECODEBANC"\n"ABC"'
 *
 * 给你一个字符串 s 、一个字符串 t 。返回 s 中涵盖 t 所有字符的最小子串。如果 s 中不存在涵盖 t 所有字符的子串，则返回空字符串 ""
 * 。
 *
 *
 *
 * 注意：
 *
 *
 * 对于 t 中重复字符，我们寻找的子字符串中该字符数量必须不少于 t 中该字符数量。
 * 如果 s 中存在这样的子串，我们保证它是唯一的答案。
 *
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：s = "ADOBECODEBANC", t = "ABC"
 * 输出："BANC"
 * 解释：最小覆盖子串 "BANC" 包含来自字符串 t 的 'A'、'B' 和 'C'。
 *
 *
 * 示例 2：
 *
 *
 * 输入：s = "a", t = "a"
 * 输出："a"
 * 解释：整个字符串 s 是最小覆盖子串。
 *
 *
 * 示例 3:
 *
 *
 * 输入: s = "a", t = "aa"
 * 输出: ""
 * 解释: t 中两个字符 'a' 均应包含在 s 的子串中，
 * 因此没有符合条件的子字符串，返回空字符串。
 *
 *
 *
 * 提示：
 *
 *
 * ^m == s.length
 * ^n == t.length
 * 1 <= m, n <= 10^5
 * s 和 t 由英文字母组成
 *
 *
 *
 * 进阶：你能设计一个在 o(m+n) 时间内解决此问题的算法吗？
 */

// @lc code=start

const isChildStr = (parentStr: string, target: string) => {
  let parentArr = parentStr.split('');
  for (let i = 0; i < target.length; i++) {
    const element = target[i];
    const idx = parentArr.findIndex((char) => char === element);
    if (idx === -1) return false;
    parentArr.splice(idx, 1);
  }
  return true;
};

/**
 * 解法1：暴力解法
 * 遍历所有的子串
 */
function minWindow1(s: string, t: string): string {
  let result = '';
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j <= s.length; j++) {
      const element = s.substring(i, j);
      if (isChildStr(element, t)) {
        if (result === '' || element.length < result.length) {
          result = element;
        }
      }
    }
  }
  return result;
}
/**
 * 解法2：双指针
 * [l, r)
 * a. 从 0,0 开始，
 * b. 不断扩大 r，直到区间都符合，
 * c. 收缩 l，直到不符合时, 继续b
 */
function minWindow2(s: string, t: string): string {
  let result = '';
  let l = 0;
  let r = 0;
  while (r <= s.length) {
    const curr = s.substring(l, r);
    if (isChildStr(curr, t)) {
      if (result === '' || curr.length < result.length) {
        result = curr;
      }
      l++;
    } else {
      r++;
    }
  }
  console.log(result);
  return result;
}

/**
 * 解法2：更高效的双指针
 * 思路和上面一样，不过 使用 map 来避免字符串的操作
 */
function minWindow(s: string, t: string): string {
  let result = '';
  let l = 0;
  let r = 0;
  const needChar: Record<string, number> = {};
  const windowChar: Record<string, number> = {};
  for (const str of t) {
    needChar[str] = (needChar[str] ?? 0) + 1;
  }

  while (r <= s.length) {
    const currChat = s[r];
  }
  console.log(result);
  return result;
}
// @lc code=end
