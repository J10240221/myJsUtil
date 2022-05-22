function twoSum(nums, target) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const currNum = nums[i];
    if (map.has(target - currNum)) {
      return [map.get(target - currNum), i];
    }
    map.set(currNum, i);
  }
}

/** 
 * 双指针，好理解
 * @param nums
 * @param target
 * @returns
 */
function twoSum2(nums: number[], target) {
  // 递增排序
  nums.sort((a, b) => a - b);

  let lIdx = 0;
  let rIdx = nums.length - 1;
  while (lIdx < rIdx) {
    const lVal = nums[lIdx];
    const rVal = nums[rIdx];
    const sum = lVal + rVal;
    if (sum === target) {
      return true;
    } else if (sum > target) {
      rIdx--;
    } else {
      // sum < target
      lIdx++;
    }
  }
  return false;
}
