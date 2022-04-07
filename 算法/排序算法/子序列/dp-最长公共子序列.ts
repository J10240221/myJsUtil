/* 
给定两个字符串 text1 和 text2，返回这两个字符串的最长 公共子序列 的长度。如果不存在 公共子序列 ，返回 0 。

一个字符串的 子序列 是指这样一个新的字符串：它是由原字符串在不改变字符的相对顺序的情况下删除某些字符（也可以不删除任何字符）后组成的新字符串。

例如，"ace" 是 "abcde" 的子序列，但 "aec" 不是 "abcde" 的子序列。
两个字符串的 公共子序列 是这两个字符串所共同拥有的子序列。

 

示例 1：

输入：text1 = "abcde", text2 = "ace" 
输出：3  
解释：最长公共子序列是 "ace" ，它的长度为 3 。
示例 2：

输入：text1 = "abc", text2 = "abc"
输出：3
解释：最长公共子序列是 "abc" ，它的长度为 3 。
示例 3：

输入：text1 = "abc", text2 = "def"
输出：0
解释：两个字符串没有公共子序列，返回 0 。
 

提示：

1 <= text1.length, text2.length <= 1000
text1 和 text2 仅由小写英文字符组成。


来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/qJnOS7
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */

const ss1 = "cdbcd";
const ss2 = "abcd";

/**
 * s1 = abcd
 * s2 = cdbcd
 *      0 1 2 3 4 c下标（列）
 *        a b c d
 * r下标(行)
 * 0    0 0 0 0 0
 * 1c   0 0 0 1 1
 * 2d   0 0 0 1 2
 * 3b   0 0 1 1 2
 * 4c   0 0 1 2 2
 * 5d   0 0 1 2 3
 *
 *  if  : s1[c] === s2[i] ====>>>  dp[r][c] = max{ dp[r-1][c-1] + 1, dp[r-1][c] }
 *  else: dp[r][c] = dp[r-1][c]
 *
 * @param text1
 * @param text2
 */
function longestCommonSubsequence(text1: string, text2: string): number {
  const row = text1.length; // row index
  const col = text2.length; // col index
  const dp = new Array(row + 1)
    .fill(0)
    .map((item) => new Array(col + 1).fill(0));

  console.log(JSON.stringify(dp));
  for (let r = 1; r <= row; r++) {
    const currRowStr = text1[r - 1];
    for (let c = 1; c <= col; c++) {
      const currColStr = text2[c - 1];
      if (currRowStr === currColStr) {
        dp[r][c] = Math.max(dp[r - 1][c - 1] + 1, dp[r - 1][c]);
      } else {
        dp[r][c] = Math.max(dp[r][c - 1], dp[r - 1][c]);
      }
    }
  }
  const max = Math.max(...dp[row]);
  console.log(JSON.stringify(dp, undefined, ""));
  console.log(max);
  return max;
}

longestCommonSubsequence(ss1, ss2);
