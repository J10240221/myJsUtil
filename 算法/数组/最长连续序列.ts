/* 
给定一个未排序的整数数组 nums ，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。

请你设计并实现时间复杂度为 O(n) 的算法解决此问题。

 

示例 1：

输入：nums = [100,4,200,1,3,2]
输出：4
解释：最长数字连续序列是 [1, 2, 3, 4]。它的长度为 4。
示例 2：

输入：nums = [0,3,7,2,5,8,4,6,0,1]
输出：9

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/longest-consecutive-sequence
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */

function longestConsecutive(nums: number[]): number {
  if (nums.length === 0) {
    return 0;
  }

  let numSet = new Set<number>();

  // 提供 O1 的搜索能力,并去重
  nums.forEach((n) => {
    numSet.add(n);
  });

  let maxRet = 1;

  for (let n of numSet) {
    if (!numSet.has(n - 1)) {
      let max = 1;
      // 是连续的序列 中 最小的那个
      while (numSet.has(n + 1)) {
        max++;
        n++;
      }

      maxRet = Math.max(maxRet, max);
    }
  }
  return maxRet;
}
