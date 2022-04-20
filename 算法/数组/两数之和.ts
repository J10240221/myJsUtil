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
