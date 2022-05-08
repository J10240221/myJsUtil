/* 
整数数组的一个 排列  就是将其所有成员以序列或线性顺序排列。

例如，arr = [1,2,3] ，以下这些都可以视作 arr 的排列：[1,2,3]、[1,3,2]、[3,1,2]、[2,3,1] 。
整数数组的 下一个排列 是指其整数的下一个字典序更大的排列。更正式地，如果数组的所有排列根据其字典顺序从小到大排列在一个容器中，那么数组的 下一个排列 就是在这个有序容器中排在它后面的那个排列。如果不存在下一个更大的排列，那么这个数组必须重排为字典序最小的排列（即，其元素按升序排列）。

例如，arr = [1,2,3] 的下一个排列是 [1,3,2] 。
类似地，arr = [2,3,1] 的下一个排列是 [3,1,2] 。
而 arr = [3,2,1] 的下一个排列是 [1,2,3] ，因为 [3,2,1] 不存在一个字典序更大的排列。
给你一个整数数组 nums ，找出 nums 的下一个排列。

必须 原地 修改，只允许使用额外常数空间。

 

示例 1：

输入：nums = [1,2,3]
输出：[1,3,2]
示例 2：

输入：nums = [3,2,1]
输出：[1,2,3]
示例 3：

输入：nums = [1,1,5]
输出：[1,5,1]

链接：https://leetcode-cn.com/problems/next-permutation
 */

/**
 Do not return anything, modify nums in-place instead.
 case1: 从最后面开始，找第一个递增的节点，nums[i-1] < nums[i],这是对i-1 后面的数，从后往前，找第一个比 nums[i-1]大的数，
 因为后面的都是递减的，所以找到的必然是 比nums[i-1] `大最少` 的数，进行替换，再对 nums[i] 后面的数，进行递增排序即可
 case2：如果没有找到，则说明是 最大的一项，直接返回最小的 ，即：反转数组项
 12345
 12354
 12435
 */
function nextPermutation(nums: number[]): void {
  const len = nums.length;
  let currIdx = len - 1;
  let hadSwap = false;
  while (currIdx >= 1) {
    let prevIdx = currIdx - 1;
    // 找到了第一个 升序的点 prevIdx
    if (nums[prevIdx] < nums[currIdx]) {
      // 需要对 prevIdx 的数 进行替换，替换为 currIdx 到 len 中 比prevIdx值【大最少】的数,因为后面都是降序排列的，所以从后往前找 第一个比它【大最少的数】
      let tarIdx = len - 1;
      while (tarIdx >= currIdx) {
        if (nums[tarIdx] > nums[prevIdx]) {
          // swap
          [nums[prevIdx], nums[tarIdx]] = [nums[tarIdx], nums[prevIdx]];
          // 对 currIdx 及后续的元素排序，递增
          const needSortArr = nums.slice(currIdx);
          needSortArr.sort((a, b) => a - b);
          nums.splice(currIdx, len - currIdx, ...needSortArr);

          hadSwap = true;
          break;
        }
        tarIdx--;
      }

      if (hadSwap) {
        break;
      }
    }

    currIdx--;
  }
  if (!hadSwap) {
    // 当前是最大的项,倒序找到最小的
    nums.reverse();
  }
}
