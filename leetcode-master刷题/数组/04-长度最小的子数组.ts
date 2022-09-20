/* 
给定一个含有 n 个正整数的数组和一个正整数 s ，找出该数组中满足其和 ≥ s 的长度最小的 连续 子数组，
并返回其长度。如果不存在符合条件的子数组，返回 0。

示例：
输入：s = 7, nums = [2,3,1,2,4,3] 输出：2 解释：子数组 [4,3] 是该条件下的长度最小的子数组。

# */

// 自己写出来的 时间复杂度 高的方案
function minSubArrayLen(nums: number[], target: number): number {
  let minLen = Number.MAX_SAFE_INTEGER;

  let startIdx = 0;
  let endIdx = 0;
  const len = nums.length;
  while (startIdx <= len) {
    const currArr = nums.slice(startIdx, endIdx + 1);

    const sum = currArr.reduce((ret, currV) => ret + currV, 0);
    if (sum >= target) {
      minLen = Math.min(minLen, currArr.length);
      startIdx++;
      endIdx = startIdx;
    } else {
      endIdx++;
    }

    if (endIdx > len) {
      startIdx++;
      endIdx = startIdx;
    }
  }

  return minLen === Number.MAX_SAFE_INTEGER ? 0 : minLen;
}

// 时间复杂度 On 的算法，参考写的 第一层循环 处理 每次 endIdx++ 的情况
function minSubArrayLen2(nums: number[], target: number): number {
  let minLen = Number.MAX_SAFE_INTEGER;

  let startIdx = 0;
  let endIdx = 0;
  let sum = 0;

  const len = nums.length;
  while (endIdx < len) {
    sum += nums[endIdx];

    if (sum >= target) {
      // startIdx 往右靠
      while (sum - nums[startIdx] >= target) {
        sum -= nums[startIdx];
        startIdx++;
      }
      minLen = Math.min(minLen, endIdx - startIdx + 1);
    }
    endIdx++;
  }

  return minLen === Number.MAX_SAFE_INTEGER ? 0 : minLen;
}

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7));
