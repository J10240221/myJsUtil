/* 
19. 删除链表的倒数第 N 个结点
给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。


示例 1：
输入：head = [1,2,3,4,5], n = 2
输出：[1,2,3,5]


示例 2：
输入：head = [1], n = 1
输出：[]


示例 3：
输入：head = [1,2], n = 1
输出：[1]
 */

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  // 通过这个 dummy 节点，来统一化处理；否则头节点删除的时候 仍需要特殊处理
  const dummy = new ListNode(null, head);
  let fast = dummy;
  let curr = dummy;
  let fastIdx = 0;

  // 让 fast 走快 n 步
  while (fastIdx < n) {
    fast = fast.next;
    fastIdx++;
  }

  //  1 2 3 4.   比如 删倒数第2
  //0 1 2 3 4
  // f = 2, c = 0,.... f = 4, c = 2, -> if (f.next == null) c.next = c.next.next
  while (fast) {
    if (fast.next === null) {
      curr.next = curr.next.next;
    }
    fast = fast.next;
    curr = curr.next;
  }

  return dummy.next;
}
