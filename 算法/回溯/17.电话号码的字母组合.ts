/*
 * @lc app=leetcode.cn id=17 lang=typescript
 *
 * [17] 电话号码的字母组合
 *
 * https://leetcode.cn/problems/letter-combinations-of-a-phone-number/description/
 *
 * algorithms
 * Medium (60.82%)
 * Likes:    2974
 * Dislikes: 0
 * Total Accepted:    1M
 * Total Submissions: 1.6M
 * Testcase Example:  '"23"'
 *
 * 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。答案可以按 任意顺序 返回。
 *
 * 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。
 *
 *
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：digits = "23"
 * 输出：["ad","ae","af","bd","be","bf","cd","ce","cf"]
 *
 *
 * 示例 2：
 *
 *
 * 输入：digits = ""
 * 输出：[]
 *
 *
 * 示例 3：
 *
 *
 * 输入：digits = "2"
 * 输出：["a","b","c"]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 0 <= digits.length <= 4
 * digits[i] 是范围 ['2', '9'] 的一个数字。
 *
 *
 */

// @lc code=start

const CHAR_LIST = [
  [],
  [],
  ['a', 'b', 'c'],
  ['d', 'e', 'f'],
  ['g', 'h', 'i'],
  ['j', 'k', 'l'],
  ['m', 'n', 'o'],
  ['p', 'q', 'r', 's'],
  ['t', 'u', 'v'],
  ['w', 'x', 'y', 'z'],
];

/**
 * 思路，穷举
 * @param digits
 */
function letterCombinations(digits: string): string[] {
  if (digits === '') return [];
  const result: string[][] = [];
  const digitsArr = digits.split('').map(Number);

  const bt = (startDigitsIndex: number, singleResult: string[]) => {
    if (singleResult.length === digitsArr.length) {
      result.push([...singleResult]);
      return;
    }
    // 当前这个，和后续所有的 组合
    const currDigits = digitsArr[startDigitsIndex];
    const chars = CHAR_LIST[currDigits];

    for (let i = 0; i < chars.length; i++) {
      const char = chars[i];
      singleResult.push(char);
      bt(startDigitsIndex + 1, singleResult);
      singleResult.pop();
    }
  };

  bt(0, []);

  return result.map((it) => it.join(''));
}

console.log(letterCombinations('23'));
// @lc code=end
