/*
 * @lc app=leetcode.cn id=77 lang=typescript
 *
 * [77] 组合
 *
 * https://leetcode.cn/problems/combinations/description/
 *
 * algorithms
 * Medium (77.38%)
 * Likes:    1711
 * Dislikes: 0
 * Total Accepted:    813.7K
 * Total Submissions: 1.1M
 * Testcase Example:  '4\n2'
 *
 * 给定两个整数 n 和 k，返回范围 [1, n] 中所有可能的 k 个数的组合。
 *
 * 你可以按 任何顺序 返回答案。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：n = 4, k = 2
 * 输出：
 * [
 * ⁠ [2,4],
 * ⁠ [3,4],
 * ⁠ [2,3],
 * ⁠ [1,2],
 * ⁠ [1,3],
 * ⁠ [1,4],
 * ]
 *
 * 示例 2：
 *
 *
 * 输入：n = 1, k = 1
 * 输出：[[1]]
 *
 *
 *
 * 提示：
 *
 *
 * 1
 * 1
 *
 *
 */

// @lc code=start
function combine(n: number, k: number): number[][] {
  // 1~n 中， k个数的所哟case
  // 3, 2
  // [1,2], [1,3], [2,3]
  // 5, 3
  // 1,2,3,4,5
  // [1,2,3] [1,2,4], [1,2,5], [2,3,4] [2,3,5], [3,4,5]

  const result: number[][] = [];

  const backtrack = (resItem: number[], startC: number) => {
    if (resItem.length === k) {
      result.push([...resItem]);
    }

    // 确保从小到大，不会有重复
    for (let i = startC; i <= n; i++) {
      resItem.push(i); // 加入当前元素

      backtrack(resItem, i + 1);

      resItem.pop(); // 移出当前元素
    }
  };

  backtrack([], 1);

  return result;
}

console.log(combine(5, 3));
// @lc code=end
