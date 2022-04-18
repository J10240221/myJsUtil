/**
    滑动窗口处理
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
  const prevS = s.slice(0, s.length - 1);
  return !prevS.includes(newS);
}

const demoD = "abcabcbb";

lengthOfLongestSubstring(demoD);
