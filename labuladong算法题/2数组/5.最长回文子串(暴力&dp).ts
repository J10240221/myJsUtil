/*
 * @lc app=leetcode.cn id=5 lang=typescript
 *
 * [5] 最长回文子串
 *
 * https://leetcode.cn/problems/longest-palindromic-substring/description/
 *
 * algorithms
 * Medium (38.73%)
 * Likes:    7365
 * Dislikes: 0
 * Total Accepted:    1.8M
 * Total Submissions: 4.7M
 * Testcase Example:  '"babad"'
 *
 * 给你一个字符串 s，找到 s 中最长的 回文 子串。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：s = "babad"
 * 输出："bab"
 * 解释："aba" 同样是符合题意的答案。
 *
 *
 * 示例 2：
 *
 *
 * 输入：s = "cbbd"
 * 输出："bb"
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= s.length <= 1000
 * s 仅由数字和英文字母组成
 *
 *
 */

// @lc code=start

/** 解法0：暴力 */
const longestPalindrome = (s: string) => {
  /** 获取 l 和 r作为起始点的回文 */
  function isPalindromeStr(str: string, l: number, r: number): boolean {
    while (l < r) {
      if (str[l] !== str[r]) return false;
      l++;
      r--;
    }
    return true;
  }

  let result = s[0];

  for (let i = 0; i < s.length; i++) {
    for (let j = 1; j < s.length; j++) {
      if (isPalindromeStr(s, i, j)) {
        if (j - i + 1 > result.length) {
          result = s.substring(i, j + 1);
        }
      }
    }
  }

  console.log('result', result);
  return result;
};

/**
 * 解法一：回溯的解法，容易想到
 * 从开头位置开始，往两边回溯, 单数 和 偶数
 */
const longestPalindrome1 = (s: string) => {
  /** 获取 l 和 r作为起始点的回文 */
  function getPalindromeStr(str: string, l: number, r: number): string {
    let palindromeStr = '';
    while (str[l] === str[r]) {
      l--;
      r++;
    }
    palindromeStr = str.substring(l + 1, r);

    return palindromeStr;
  }

  let result = '';
  for (let i = 0; i < s.length; i++) {
    // 按照 奇数 往外扩散
    const oddResult = getPalindromeStr(s, i, i);

    result = oddResult.length > result.length ? oddResult : result;

    // 按照 偶数基数 往外扩散
    const evenResult = getPalindromeStr(s, i, i + 1);
    result = evenResult.length > result.length ? evenResult : result;
  }
  return result;
};

/**
 * 解法二：动态规划
 * 思考有这样的状态转移方程
 * P(i, j) = P(i+1,j-1) && V(i) === V(j)
 * 如何实现 递推的dp？ 因为状态方程 需要 内部状态已经完成，而内部的长度必然小于外部
 * 所以我们可以考虑按照【长度】去递推，len = 1 必然是 true, 然后 len = 2, 再 3，直到它的长度
 *
 */
const longestPalindrome2 = (s: string) => {
  // 单个字符串都符合回文，先取第一个字符串作为默认值
  let maxStrLen = s[0];
  const dp: boolean[][] = new Array(s.length).fill(null).map(() => new Array(s.length).fill(false));

  for (let i = 0; i < s.length; i++) {
    // 单个必然是回文
    dp[i][i] = true;
  }

  // 1个长度的回文已经完成，从2个长度 开始 直到整个长度
  for (let len = 2; len <= s.length; len++) {
    // P(i, j) = P(i+1,j-1) && V(i) === V(j)
    for (let i = 0; i < s.length; i++) {
      const j = i + len - 1;
      if (j > s.length) break;
      if (s[i] === s[j]) {
        // 3及以内长度，不需要看内部是否是回文
        if (j - i + 1 <= 3) {
          dp[i][j] = true;
        } else {
          dp[i][j] = dp[i + 1][j - 1];
        }
      }

      // 判断是否最长
      if (dp[i][j]) {
        if (j - i + 1 > maxStrLen.length) {
          maxStrLen = s.substring(i, j + 1);
        }
      }
    }
  }
  return maxStrLen;
};

// @lc code=end

longestPalindrome2('1aa');
