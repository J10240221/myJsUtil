/*
 * @lc app=leetcode.cn id=24 lang=typescript
 *
 * [24] 两两交换链表中的节点
 *
 * https://leetcode.cn/problems/swap-nodes-in-pairs/description/
 *
 * algorithms
 * Medium (73.03%)
 * Likes:    2295
 * Dislikes: 0
 * Total Accepted:    959.9K
 * Total Submissions: 1.3M
 * Testcase Example:  '[1,2,3,4]'
 *
 * 给你一个链表，两两交换其中相邻的节点，并返回交换后链表的头节点。你必须在不修改节点内部的值的情况下完成本题（即，只能进行节点交换）。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：head = [1,2,3,4]
 * 输出：[2,1,4,3]
 *
 *
 * 示例 2：
 *
 *
 * 输入：head = []
 * 输出：[]
 *
 *
 * 示例 3：
 *
 *
 * 输入：head = [1]
 * 输出：[1]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 链表中节点的数目在范围 [0, 100] 内
 * 0 <= Node.val <= 100
 *
 *
 */

// @lc code=start

//  Definition for singly-linked list.
// class ListNode {
//   val: number;
//   next: ListNode | null;
//   constructor(val?: number, next?: ListNode | null) {
//     this.val = val === undefined ? 0 : val;
//     this.next = next === undefined ? null : next;
//   }
// }

function swapPairs1(head: ListNode | null): ListNode | null {
  /*
     1   2   3   4    5
     .   .   .   .    
     */
  let curr = head; // 1
  let isFirst = true;
  let result = head;

  while (curr) {
    const n = curr?.next || null; // 2
    const nn = curr?.next?.next || null; // 3
    const nnn = curr?.next?.next?.next || null; // 4

    if (n && isFirst) {
      result = n;
      isFirst = false;
    }

    curr.next = nnn || nn; // 1 2 3 4,  1->4, 如果没有4 则1->3
    n && (n.next = curr); //

    curr = nn;
  }

  return result;
}

/**
 * 递归的实现，自己想到的，
 * 首先假设这个函数已经实现，而它的返回值，应该就是第二个节点，
 * 然后考虑后续遍历
 * @param head 
 * @returns 
 */
function swapPairs(head: ListNode | null): ListNode | null {
  if (!head) return null;
  if (!head.next) return head;

  const nn = head.next.next;

  const newH = swapPairs(nn);

  const n = head.next;
  head.next = newH;
  n.next = head;
  return n;
}
// @lc code=end

// function genListNode(arr: number[]): ListNode {
//   let list = new ListNode(arr[0]);
//   let curr = list;
//   for (let i = 1; i < arr.length; i++) {
//     curr.next = new ListNode(arr[i]);
//     curr = curr.next;
//   }
//   return list;
// }

// swapPairs(genListNode([1, 2, 3, 4]));
