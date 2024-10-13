/*
 * @lc app=leetcode.cn id=415 lang=typescript
 *
 * [415] 字符串相加
 *
 * https://leetcode.cn/problems/add-strings/description/
 *
 * algorithms
 * Easy (54.59%)
 * Likes:    853
 * Dislikes: 0
 * Total Accepted:    347.6K
 * Total Submissions: 636.7K
 * Testcase Example:  '"11"\n"123"'
 *
 * 给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和并同样以字符串形式返回。
 *
 * 你不能使用任何內建的用于处理大整数的库（比如 BigInteger）， 也不能直接将输入的字符串转换为整数形式。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：num1 = "11", num2 = "123"
 * 输出："134"
 *
 *
 * 示例 2：
 *
 *
 * 输入：num1 = "456", num2 = "77"
 * 输出："533"
 *
 *
 * 示例 3：
 *
 *
 * 输入：num1 = "0", num2 = "0"
 * 输出："0"
 *
 *
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= num1.length, num2.length <= 10^4
 * num1 和num2 都只包含数字 0-9
 * num1 和num2 都不包含任何前导零
 *
 *
 */

// @lc code=start
/**
 * 思路
 * 567   index at(-1, -2, -3) 直到 maxLen
 *  18
 * -----
 *  15
 *  75
 * 575
 *
 *
 *
 * @param num1
 * @param num2
 */
function addStrings(num1: string, num2: string): string {
  const numArr1 = [...num1];
  const numArr2 = [...num2];

  let maxLen = Math.max(numArr1.length, numArr2.length);
  let currIdx = -1;
  /** 高位的值 */
  let highVal = 0;
  const valArr: number[] = [];

  // -1, -2, -3... -maxLen
  while (currIdx >= -maxLen) {
    const currNum1 = numArr1.at(currIdx) || 0;
    const currNum2 = numArr2.at(currIdx) || 0;
    const currVal = +currNum1 + +currNum2 + highVal;
    highVal = currVal > 9 ? 1 : 0;
    valArr.push(currVal % 10);
    currIdx--;
  }

  // 解决 9 + 1  = 10 的情况
  if (highVal === 1) {
    valArr.push(1);
  }

  return valArr.reverse().join('');
}
// @lc code=end
