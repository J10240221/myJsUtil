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

 从链表的首位 开始加, 如果有一个链表有值，另一个没有值，添加哨兵 = 0；继续操作，直至 2个 都为 链表尾部
 */
function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  const result: number[] = [];
  let curr1: undefined | ListNode | null = l1;
  let curr2: undefined | ListNode | null = l2;
  let index = 0;

  while (curr1 || curr2) {
    const res = (curr1?.val ?? 0) + (curr2?.val ?? 0) + (result[index] ?? 0);
    let tenPos = res >= 10 ? 1 : 0;
    let onePos = res % 10;
    result[index] = onePos;
    result[index + 1] = tenPos;

    curr1 = curr1?.next;
    curr2 = curr2?.next;
    index++;
  }
  if (result[result.length - 1] === 0) {
    result.pop();
  }

  return genListNode(result);
}

function genListNode(arr: number[]): ListNode {
  let list = new ListNode(arr[0]);
  let curr = list;
  for (let i = 1; i < arr.length; i++) {
    curr.next = new ListNode(arr[i]);
    curr = curr.next;
  }
  return list;
}
