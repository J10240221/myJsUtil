/*
 * @lc app=leetcode.cn id=19 lang=typescript
 *
 * [19] 删除链表的倒数第 N 个结点
 *
 * https://leetcode.cn/problems/remove-nth-node-from-end-of-list/description/
 *
 * algorithms
 * Medium (49.29%)
 * Likes:    2949
 * Dislikes: 0
 * Total Accepted:    1.5M
 * Total Submissions: 3.1M
 * Testcase Example:  '[1,2,3,4,5]\n2'
 *
 * 给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：head = [1,2,3,4,5], n = 2
 * 输出：[1,2,3,5]
 *
 *
 * 示例 2：
 *
 *
 * 输入：head = [1], n = 1
 * 输出：[]
 *
 *
 * 示例 3：
 *
 *
 * 输入：head = [1,2], n = 1
 * 输出：[1]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 链表中结点的数目为 sz
 * 1 <= sz <= 30
 * 0 <= Node.val <= 100
 * 1 <= n <= sz
 *
 *
 *
 *
 * 进阶：你能尝试使用一趟扫描实现吗？
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
// class ListNode {
//   val: number;
//   next: ListNode | null;
//   constructor(val?: number, next?: ListNode | null) {
//     this.val = val === undefined ? 0 : val;
//     this.next = next === undefined ? null : next;
//   }
// }

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  if (!head) return head;
  let faster: ListNode | null = head;
  let slower: ListNode | null = head;
  while (n >= 0) {
    // 难点说明指针指向了第一个节点！这是返回第二个节点即可;
    // 也可以使用另一种解法：新建一个 dummy 节点，这样就能避免这种特殊处理，简化代码了
    if (faster === null) {
      return head.next;
    }
    faster = faster!.next;
    n--;
  }

  while (faster) {
    faster = faster.next;
    slower = slower!.next;
  }
  slower!.next = slower?.next?.next!;
  return head;
}
// @lc code=end
