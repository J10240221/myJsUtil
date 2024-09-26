/*
 * @lc app=leetcode.cn id=23 lang=typescript
 *
 * [23] 合并 K 个升序链表
 *
 * https://leetcode.cn/problems/merge-k-sorted-lists/description/
 *
 * algorithms
 * Hard (60.44%)
 * Likes:    2886
 * Dislikes: 0
 * Total Accepted:    871.8K
 * Total Submissions: 1.4M
 * Testcase Example:  '[[1,4,5],[1,3,4],[2,6]]'
 *
 * 给你一个链表数组，每个链表都已经按升序排列。
 *
 * 请你将所有链表合并到一个升序链表中，返回合并后的链表。
 *
 *
 *
 * 示例 1：
 *
 * 输入：lists = [[1,4,5],[1,3,4],[2,6]]
 * 输出：[1,1,2,3,4,4,5,6]
 * 解释：链表数组如下：
 * [
 * ⁠ 1->4->5,
 * ⁠ 1->3->4,
 * ⁠ 2->6
 * ]
 * 将它们合并到一个有序链表中得到。
 * 1->1->2->3->4->4->5->6
 *
 *
 * 示例 2：
 *
 * 输入：lists = []
 * 输出：[]
 *
 *
 * 示例 3：
 *
 * 输入：lists = [[]]
 * 输出：[]
 *
 *
 *
 *
 * 提示：
 *
 *
 * k == lists.length
 * 0 <= k <= 10^4
 * 0 <= lists[i].length <= 500
 * -10^4 <= lists[i][j] <= 10^4
 * lists[i] 按 升序 排列
 * lists[i].length 的总和不超过 10^4
 *
 *
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
class ListNode3 {
  val: number;
  next: ListNode3 | null;
  constructor(val?: number, next?: ListNode3 | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const findMinIndex = (params: ListNode3[]) => {
  return params
    .map((it) => it.val)
    .findIndex((it, _, arr) => {
      const min = Math.min(...arr);
      return it === min;
    });
};

/**
 * 思路：
 * 每次循环从第一列中找到最小的一个，直到只剩下一个链表的数据，就把他放到最末尾
 * @param _lists
 */
function mergeKLists(_lists: (ListNode3 | null)[]): ListNode3 | null {
  // 避免修改入参，实现无副作用
  const lists = _lists.filter(Boolean) as ListNode3[];

  const result = new ListNode3();
  // TODO: 空list的情况再考虑一下，就 ac 了
  // if (lists.length === 0) return result.next;
  let p = result;

  while (lists.length > 1) {
    const minIdx = findMinIndex(lists);
    if (minIdx === -1) break;
    const minList = lists[minIdx];
    if (minList.next) {
      // 最小值的链表， 把它替换成 重第二项开始的链表
      lists[minIdx] = minList.next;
    } else {
      // 它已经是链表的最后一个元素，则移除list中的此链表
      lists.splice(minIdx, 1);
    }

    // 选出最小的
    p.next = minList;
    // 指针向前进
    p = p.next;
  }
  // 把最后一个 放到最末尾
  p.next = lists[0];

  return result.next;
}
// @lc code=end
