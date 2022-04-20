/* 
最长递增子序列
给你一个整数数组 nums ，找到其中最长严格递增子序列的长度。

子序列 是由数组派生而来的序列，删除（或不删除）数组中的元素而不改变其余元素的顺序。例如，[3,6,2,7] 是数组 [0,3,1,6,2,2,7] 的子序列。

 
示例 1：

输入：nums = [10,9,2,5,3,7,101,18]
输出：4
解释：最长递增子序列是 [2,3,7,101]，因此长度为 4 。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/longest-increasing-subsequence
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
34123

    1 2 3 4 5  i:数组下标，表示多少个字符串满足，存储的是 最大的数字
3 - 3 
4 - 3 4
1 - 1 4
2 - 1 2
3 - 1 2 3
 */
function lengthOfLIS(nums: number[]): number {
  if (nums.length === 0) return 0;

  // 完成初始化，初始化
  const retMap: number[] = [Number.MIN_VALUE, nums[0]];
  for (let i = 1; i < nums.length; i++) {
    const currNum = nums[i];
    // 从左往右 依次比较，如果 currNum 小，则 替换当前元素，如果 currNum 大，则放在下一位

    for (let retIndex = 0, len = retMap.length; retIndex < len; retIndex++) {
      const retNum = retMap[retIndex];
      if (currNum <= retNum) {
        // 等于 替换不替换 都行
        retMap[retIndex] = currNum;
        break;
      }
      const isLast = retIndex === len - 1;
      if (isLast) {
        // 最后一个元素 比 currNum 要小，则数组增加一位
        retMap[len] = currNum;
        break;
      }
    }
  }
  console.log(retMap);
  return retMap.length - 1;
}

const nn = [4, 10, 4, 3, 8, 9];

lengthOfLIS(nn);
