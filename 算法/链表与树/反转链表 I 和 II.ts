/* 
https://leetcode.cn/problems/reverse-linked-list-ii/solution/bu-bu-chai-jie-ru-he-di-gui-di-fan-zhuan-lian-biao/
 */
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
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function reverseList(head: ListNode | null): ListNode | null {
  if (head === null) {
    return head;
  }

  let prev: ListNode | null = null;

  let curr = head;
  while (curr) {
    const temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }
  return prev;
}

// 递归版本
function ReverseList(head: ListNode): ListNode {
  // 递归出口
  if (!head || !head.next) {
    return head;
  }

  //  1 -> 2 -> 3
  //  1 -> reverse(2  3) ====> { head -> 1 -> 2 <- 3 <- last}
  //                                            ⬇️
  //                                          null
  // 1 作为head, 所以应该: head.next.next = head, head.next = null
  const last = ReverseList(head.next);
  head.next.next = head;
  head.next = null;
  return last;
}

/* =========== 链表部分反转 ============ */
/* 
作者：LeetCode-Solution
链接：https://leetcode.cn/problems/reverse-linked-list-ii/solution/fan-zhuan-lian-biao-ii-by-leetcode-solut-teyq/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

思路：
第 1 步：先将待反转的区域反转；
第 2 步：把 pre 的 next 指针指向反转以后的链表头节点，把反转以后的链表的尾节点的 next 指针指向 succ。
 */
function reverseBetween(head: ListNode, left: number, right: number) {
  // 因为头节点有可能发生变化，使用虚拟头节点可以避免复杂的分类讨论
  const dummy = new ListNode(-1);
  dummy.next = head;

  // left 前一个node
  let preLeftNode = dummy;
  // 第 1 步：从虚拟头节点走 left - 1 步，来到 left 节点的前一个节点
  for (let i = 0; i < left - 1; i++) {
    preLeftNode = preLeftNode.next;
  }

  // 第 2 步：从 pre 再走 right - left + 1 步，来到 right 节点
  let rightNode = preLeftNode;
  for (let i = 0; i < right - left + 1; i++) {
    rightNode = rightNode.next;
  }

  // 第 3 步：切断出一个子链表（截取链表）
  let leftNode = preLeftNode.next;
  let curr = rightNode.next;

  // 注意：切断链接
  preLeftNode.next = null;
  rightNode.next = null;

  // 第 4 步：调用 反转链表的子区间
  reverseList(leftNode);

  // 第 5 步：接回到原来的链表中
  preLeftNode.next = rightNode;
  leftNode.next = curr;
  return dummy.next;
}
