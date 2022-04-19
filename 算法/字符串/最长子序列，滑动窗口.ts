/**
 * 
 * @param s 
 * @returns 
 * 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。

 

示例 1:

输入: s = "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
示例 2:

输入: s = "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
示例 3:

输入: s = "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
 

提示：

0 <= s.length <= 5 * 104
s 由英文字母、数字、符号和空格组成

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/longest-substring-without-repeating-characters
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
function lengthOfLongestSubstring(s: string): number {
  if (s.length === 1) {
    return 1;
  }

  const len = s.length;
  let leftIndex = 0;
  let rightIndex = 1;
  let longestSubstring = 0;
  while (rightIndex <= len) {
    const subStr = s.slice(leftIndex, rightIndex);
    const newStr = s[rightIndex - 1];

    if (!isNoRepeatStr(subStr)) {
      // 新字符串 在原来的字符串里面 如果 1 2 3 2
      const firstRepeatIndex = s.indexOf(newStr, leftIndex);
      leftIndex = firstRepeatIndex + 1;
    } else {
      longestSubstring = Math.max(rightIndex - leftIndex, longestSubstring);
    }
    rightIndex++;
  }
  console.log(longestSubstring);
  return longestSubstring;
}

function isNoRepeatStr(s: string) {
  const newS = s[s.length - 1];
  return s.indexOf(newS) === s.lastIndexOf(newS);
}

const str = "au";
lengthOfLongestSubstring(str);
