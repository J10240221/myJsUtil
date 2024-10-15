/*
 * @lc app=leetcode.cn id=69 lang=typescript
 *
 * [69] x 的平方根
 *
 * https://leetcode.cn/problems/sqrtx/description/
 *
 * algorithms
 * Easy (38.62%)
 * Likes:    1591
 * Dislikes: 0
 * Total Accepted:    966.9K
 * Total Submissions: 2.5M
 * Testcase Example:  '4'
 *
 * 给你一个非负整数 x ，计算并返回 x 的 算术平方根 。
 *
 * 由于返回类型是整数，结果只保留 整数部分 ，小数部分将被 舍去 。
 *
 * 注意：不允许使用任何内置指数函数和算符，例如 pow(x, 0.5) 或者 x ** 0.5 。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：x = 4
 * 输出：2
 *
 *
 * 示例 2：
 *
 *
 * 输入：x = 8
 * 输出：2
 * 解释：8 的算术平方根是 2.82842..., 由于返回类型是整数，小数部分将被舍去。
 *
 *
 *
 *
 * 提示：
 *
 *
 * 0 <= x <= 2^31 - 1
 *
 *
 */

// @lc code=start
function mySqrt(x: number): number {
  // 从 l ~ x 的区间，不断二分逼近，
  let l = 0;
  let r = x;
  let result = 0;
  while (l <= r) {
    // 确保 mid是【不大于的整数】， 也可以使用 >> 1 来替换 【÷2 后的Math.floor】
    const mid = Math.floor(l + (r - l) / 2);
    const sqrt = mid * mid;
    if (sqrt <= x) {
      result = mid;
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  return result;
}

// mySqrt2(1);
// @lc code=end
