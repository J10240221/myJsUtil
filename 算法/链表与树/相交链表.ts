/**
走到尽头见不到你，于是走过你来时的路，等到相遇时才发现，你也走过我来时的路。 
**2条路 是一样长的**，如果 不想交 都会变成 null
*/

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function getIntersectionNode(
  headA: ListNode | null,
  headB: ListNode | null
): ListNode | null {
  if (headA == null || headB == null) return null;
  let pA = headA,
    pB = headB;
  while (pA != pB) {
    pA = pA == null ? headB : pA.next;
    pB = pB == null ? headA : pB.next;
  }
  return pA;
}
