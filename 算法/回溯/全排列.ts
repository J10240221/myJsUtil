/** 全排列
 * 比如 nums = [1,2]
 * ===> [1,2], [2,1]
 *
 * 比如 nums = [1,2,3]
 * ===> [1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2], [3,2,1]
 *
 *  * 套用 labuladong 回溯框架
 * 分析如下图
 *              ⭕️
 *       1      2       3
 *      2 3    1 3     1 2
 *     3   1  3   1   2   1
 * @param nums
 * @returns
 */
const permute = (nums: number[]): number[][] => {
  let result: number[][] = [];

  const bt = (numArr: number[], temp: number[] = []): void => {
    if (temp.length === nums.length) {
      // 避免后续的 bt 修改到引用
      result.push([...temp]);
      // 递归结束
      return;
    }

    for (const num of numArr) {
      temp.push(num);
      const restArr = numArr.filter((item) => item !== num);
      bt(restArr, temp);
      // 后续遍历，还原 temp
      temp.pop();
    }
  };

  bt(nums);
  console.log(result);
  return result;
};

/**
 * 递归的思路，归约为更小的子问题
 * permute([1, 2, 3]) = [1, permute([2, 3])] + [2, permute([1, 3]), [3, permute([1, 2])]]
 *
 * permute([2, 3]) = [permute([2]), permute([3])]
 *
 * permute([2]) = [2] 单个节点就是 递归的终点
 */
const permute2 = (nums: number[]): number[][] => {
  let result: number[][] = [];

  const bt = (__nums: number[]): number[][] => {
    if (__nums.length === 1) {
      return [__nums];
    }

    const temp: number[][] = [];
    for (const num of __nums) {
      const restNums = __nums.filter((item) => item !== num);
      const x = bt(restNums).map((item) => [...item, num]);
      temp.push(...x);
    }
    return temp;
  };

  const x = bt(nums);
  console.log(x);

  return result;
};

console.log('res', permute2([1, 2, 3]));
