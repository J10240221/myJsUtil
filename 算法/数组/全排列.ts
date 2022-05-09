/* 
给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。

 

示例 1：

输入：nums = [1,2,3]
输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
示例 2：

输入：nums = [0,1]
输出：[[0,1],[1,0]]
示例 3：

输入：nums = [1]
输出：[[1]]

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/permutations
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

function permute(nums: number[]): number[][] {
  const result: number[][] = [];
  dfs(nums);

  function dfs(numList: number[], item: number[] = []) {
    if (numList.length === 0) {
      result.push(item);
      return;
    }
    numList.forEach((num, index, arr) => {
      const newItem = [...item];
      newItem.push(num);
      // 浅拷贝 arr 避免修改参数
      let restArr = [...arr];
      restArr.splice(index, 1);
      dfs(restArr, newItem);
    });
  }

  console.log(result);

  return result;
}

permute([1, 2, 3]);
