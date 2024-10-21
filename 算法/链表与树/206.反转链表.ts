/*
 * @lc app=leetcode.cn id=206 lang=typescript
 *
 * [206] 反转链表
 *
 * https://leetcode.cn/problems/reverse-linked-list/description/
 *
 * algorithms
 * Easy (74.99%)
 * Likes:    3701
 * Dislikes: 0
 * Total Accepted:    2.1M
 * Total Submissions: 2.8M
 * Testcase Example:  '[1,2,3,4,5]'
 *
 * 给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。
 *
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：head = [1,2,3,4,5]
 * 输出：[5,4,3,2,1]
 *
 *
 * 示例 2：
 *
 *
 * 输入：head = [1,2]
 * 输出：[2,1]
 *
 *
 * 示例 3：
 *
 *
 * 输入：head = []
 * 输出：[]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 链表中节点的数目范围是 [0, 5000]
 * -5000
 *
 *
 *
 *
 * 进阶：链表可以选用迭代或递归方式完成反转。你能否用两种方法解决这道题？
 *
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

function reverseList2(head: ListNode | null): ListNode | null {
  // 1 -> 2 -> 3
  // 1, 2 -> 3
  let curr = head;
  let prev: ListNode | null = null;
  while (curr) {
    // 2
    const tempNext = curr.next; // 3
    curr.next = prev; // 2-> 1
    prev = curr;
    curr = tempNext;
  }
  return prev;
}

// 递归 非常难以思考，
/* 
思考，假设递归函数已完成，reverseList 的返回值，必然是 当前节点的下一个
 */
function reverseList(head: ListNode | null, prev: ListNode | null = null): ListNode | null {
  if (head === null) return prev;
  /*
  1 -> 2 -> null
       2 <- 3 -> null
       考虑使用递归 必须要最后的先执行反转，所以在后续遍历的位置执行操作(先递归，再操作)
   */
  const next = reverseList(head.next, head);
  head.next = prev;

  return next;
}
// @lc code=end
