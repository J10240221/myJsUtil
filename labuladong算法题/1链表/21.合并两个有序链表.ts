/*
 * @lc app=leetcode.cn id=21 lang=typescript
 *
 * [21] 合并两个有序链表
 */

class ListNodex {
  val: number;
  next: ListNodex | null;
  constructor(val?: number, next?: ListNodex | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function mergeTwoLists(list1: ListNodex | null, list2: ListNodex | null): ListNodex | null {
  const dummy = new ListNodex();
  let p1 = list1;
  let p2 = list2;
  let currP = dummy;

  while (p1 && p2) {
    if (p1.val < p2.val) {
      currP.next = p1;
      p1 = p1.next;
    } else {
      currP.next = p2;
      p2 = p2.next;
    }
    currP = currP.next;
  }

  if (p1) {
    currP.next = p1;
  }

  if (p2) {
    currP.next = p2;
  }
  return dummy.next;
}
// @lc code=end
