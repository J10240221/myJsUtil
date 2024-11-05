/*
 * @lc app=leetcode.cn id=28 lang=typescript
 *
 * [28] 找出字符串中第一个匹配项的下标
 *
 * https://leetcode.cn/problems/find-the-index-of-the-first-occurrence-in-a-string/description/
 *
 * algorithms
 * Easy (44.27%)
 * Likes:    2304
 * Dislikes: 0
 * Total Accepted:    1.2M
 * Total Submissions: 2.6M
 * Testcase Example:  '"sadbutsad"\n"sad"'
 *
 * 给你两个字符串 haystack 和 needle ，请你在 haystack 字符串中找出 needle 字符串的第一个匹配项的下标（下标从 0
 * 开始）。如果 needle 不是 haystack 的一部分，则返回  -1 。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：haystack = "sadbutsad", needle = "sad"
 * 输出：0
 * 解释："sad" 在下标 0 和 6 处匹配。
 * 第一个匹配项的下标是 0 ，所以返回 0 。
 *
 *
 * 示例 2：
 *
 *
 * 输入：haystack = "leetcode", needle = "leeto"
 * 输出：-1
 * 解释："leeto" 没有在 "leetcode" 中出现，所以返回 -1 。
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= haystack.length, needle.length <= 10^4
 * haystack 和 needle 仅由小写英文字符组成
 *
 *
 */

// @lc code=start
function strStr1(haystack: string, needle: string): number {
  /* 
  012345

  234
   */

  /** 指针下标 */
  let idx = 0;

  /** 匹配上的长度， 当 okLen === needle.len 则找到答案 */
  let okLen = 0;
  while (idx < haystack.length) {
    const hStr = haystack[idx];
    const nStr = needle[okLen];
    if (hStr === nStr) {
      okLen++;
      if (okLen === needle.length) {
        return idx - okLen + 1;
      }
      idx++;
    } else {
      // mississippi
      // issip
      idx = idx - okLen + 1;
      okLen = 0;
    }
  }
  return -1;
}

/**
 * 太烧脑了，直接放弃吧
 */
const getNext = (str: string): number[] => {
  const next: number[] = [0];
  let i = 1;
  let j = 0;
  while (i < str.length) {
    /* 
  # 上面抛弃第一个，标识i结尾的后缀，下面则是前缀，求出最长公共前后缀
  #1. 不相等，则 记录 next[i]=0, i++, j=0
   a[b]abc     i = ++   
     ababc     j = 0    
  
  #2. 相等了，记录 next[i] = j+ 1，i++ j++，(即: next[2] = 1)
  ab[a]bc      i = 2   
     ababc     j = 0
     
  # 还是相等 【同2】 (即: next[3] = 2)
  ab[ab]c      i = 3
     ababc     j = 1
  
  # 不相等 同【1】(即: next[4] = 0)
  ab[abc]      i = 2
     ababc     j = 1
     */
    /* 
 aabaaac
    aabaaac 
    0101220
adcadde
   adcadde j = 2
   00012
     */
    if (str[i] === str[j]) {
      next[i] = j + 1;
      i++;
      j++;
    } else {
      if (j === 0) {
        next[i] = 0;
        i++;
      } else {
        // 核心！利用已经算出来的 next 去获取j的位置
        j = next[j - 1];
      }
    }
  }
  return next;
};
//  aabaaac
// [0, 0, 1, 1, 0]
[0, 1, 0, 1, 2, 1, 0];
/**
 * kmp 版本
 *
 */
function strStr(haystack: string, needle: string): number {
  const next = getNext(needle);
  console.log('next', next);
  /* 
      abababcaa  i
      ababc     j
next=[00120] 
   */
  let i = 0;
  let j = 0;
  while (i < haystack.length) {
    if (haystack[i] === needle[j]) {
      if (j === needle.length - 1) {
        return i - j;
      }
      i++;
      j++;
    } else {
      // 不相等
      if (j === 0) {
        i++;
      } else {
        j = next[j - 1];
      }
    }
    console.log('i,j', i, j);
  }
  return -1;
}

// console.log(strStr('ppi', 'pi'));

console.log(getNext('aabaaac')); // 最后的a 不匹配却要 是2
/* 
aabaaac
   aabaaac
adcadde
   adcadde
 */
console.log(getNext('adcadde')); // 最后的d 不匹配却要 是0

// @lc code=end
