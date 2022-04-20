/* 
给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。

注意：答案中不可以包含重复的三元组。

 

示例 1：

输入：nums = [-1,0,1,2,-1,-4]
输出：[[-1,-1,2],[-1,0,1]]
示例 2：

输入：nums = []
输出：[]
示例 3：

输入：nums = [0]
输出：[]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/3sum
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
1 由于 要去重，所以需要先排序,然后利用双指针 去处理，定住 i， 然后依次 使用 left = i+1;right=len -1;
 */
function threeSum(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);
  const length = nums.length;
  const result: number[][] = [];
  for (let i = 0; i < length; i++) {
    let leftIndex = i + 1;
    let rightIndex = length - 1;
    let num = nums[i];
    if (num === nums[i - 1]) {
      continue;
    }
    while (leftIndex < rightIndex) {
      const left = nums[leftIndex];
      const right = nums[rightIndex];
      const sum = num + left + right;
      if (sum === 0) {
        result.push([num, left, right]);

        (function setLeftIndex() {
          leftIndex++;
          if (nums[leftIndex - 1] === nums[leftIndex]) {
            setLeftIndex();
          }
        })();

        (function setRightIndex() {
          rightIndex--;
          if (nums[rightIndex + 1] === nums[rightIndex]) {
            setRightIndex();
          }
        })();
      } else if (sum > 0) {
        rightIndex--;
      } else {
        leftIndex++;
      }
    }
  }
  console.log(result);

  return result;
}
