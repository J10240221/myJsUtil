/* 
两个链表的第一个公共节点


 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 * 
 * 思路：
 * 你变成我，走过我走过的路。
我变成你，走过你走过的路。
然后我们便相遇了
 */
var getIntersectionNode = function (headA, headB) {
  if (!headA || !headB) return null;
  let a = headA;
  let b = headB;
  while (a !== b) {
    // 需要处理 空节点的情况
    // 1 -> null
    // 3 -> 4 -> null
    a = a === null ? headB : a.next;
    b = b === null ? headA : b.next;
  }
  return a;
};
