/* 
以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi] 。请你合并所有重叠的区间，并返回 一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间 。

 

示例 1：

输入：intervals = [[1,3],[2,6],[8,10],[15,18]]
输出：[[1,6],[8,10],[15,18]]
解释：区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
示例 2：

输入：intervals = [[1,4],[4,5]]
输出：[[1,5]]
解释：区间 [1,4] 和 [4,5] 可被视为重叠区间。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/merge-intervals
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。*/

function merge(intervals: number[][]): number[][] {
  intervals.sort((a, b) => a[0] - b[0]); // 保证第一位递增
  if (intervals.length === 0) return [];

  const merged: number[][] = [intervals[0]];
  for (let i = 1; i < intervals.length; i++) {
    const curr = intervals[i];
    const n1 = curr[0];
    const n2 = curr[1];

    const lastOne = merged[merged.length - 1];
    if (n1 <= lastOne[1]) {
      merged[merged.length - 1] = [lastOne[0], Math.max(lastOne[1], n2)];
      // 需要被合并
    } else {
      merged.push(curr);
    }
  }
  //   console.log(merged);
  return merged;
}
