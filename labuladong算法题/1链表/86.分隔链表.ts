/*
 * @lc app=leetcode.cn id=86 lang=typescript
 *
 * [86] 分隔链表
 *
 * https://leetcode.cn/problems/partition-list/description/
 *
 * algorithms
 * Medium (65.13%)
 * Likes:    859
 * Dislikes: 0
 * Total Accepted:    307.2K
 * Total Submissions: 471.6K
 * Testcase Example:  '[1,4,3,2,5,2]\n3'
 *
 * 给你一个链表的头节点 head 和一个特定值 x ，请你对链表进行分隔，使得所有 小于 x 的节点都出现在 大于或等于 x 的节点之前。
 *
 * 你应当 保留 两个分区中每个节点的初始相对位置。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：head = [1,4,3,2,5,2], x = 3
 * 输出：[1,2,2,4,3,5]
 *
 *
 * 示例 2：
 *
 *
 * 输入：head = [2,1], x = 2
 * 输出：[1,2]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 链表中节点的数目在范围 [0, 200] 内
 * -100
 * -200
 *
 *
 */

// @lc code=start

class ListNode2 {
  val: number;
  next: ListNode2 | null;
  constructor(val?: number, next?: ListNode2 | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

/**
 * 思路；以目标为界限，分割出2个 大小链表， 然后再 p1 -> x -> p2
 * @param head
 * @param x
 */
function partition(head: ListNode2 | null, x: number): ListNode2 | null {
  const lessList = new ListNode2();
  const greaterList = new ListNode2();
  let lP = lessList;
  let gP = greaterList;
  let currP = head;
  while (currP) {
    // 按照题意，一定要 >= 而不能 >
    if (currP.val >= x) {
      gP.next = currP;
      gP = gP.next;
    } else {
      lP.next = currP;
      lP = lP.next;
    }
    // 需要断开 原来的指针，避免最后一个指向其他，导致成环的情况
    const temp = currP.next;
    currP.next = null;
    currP = temp;
  }
  lP.next = greaterList.next;
  return lessList.next;
}
// @lc code=end
