/* 给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target  ，写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。

示例 1:

输入: nums = [-1,0,3,5,9,12], target = 9     
输出: 4       
解释: 9 出现在 nums 中并且下标为 4     
示例 2:

输入: nums = [-1,0,3,5,9,12], target = 2     
输出: -1        
解释: 2 不存在 nums 中因此返回 -1        
提示：

你可以假设 nums 中的所有元素是不重复的。
n 将在 [1, 10000]之间。
nums 的每个元素都将在 [-9999, 9999]之间。
# */

function getTar(nums: number[], target: number): number {
  let lIdx = 0;
  let rIdx = nums.length - 1;
  // [0] m=0;  [0,2] m = 0;  [0,2,3] m = 1
  /**
   * 除2 向下取整
   *
   *! 二分的关键就是 很多细节，可以通过一下几个 小 case 去推到
   * a:[0] --> m=0;  b:[0,2,4] -> m = 1
   ** a 推导出 lIdx 与 rIdx 的关系是 <= 而不是 <
   ** b 推导出如果比 2小 --> r=m-1; 如果比2大 --> l=m+1
   */
  while (lIdx <= rIdx) {
    const mIdx = (rIdx + lIdx) >> 1;
    if (nums[mIdx] === target) {
      return mIdx;
    }

    if (nums[mIdx] > target) {
      rIdx = mIdx - 1;
    } else {
      lIdx = mIdx + 1;
    }
  }

  return -1;
}

const nums = [-1, 0, 3, 5, 9, 12];
const target = 2;

console.log('aaa', getTar(nums, target));
