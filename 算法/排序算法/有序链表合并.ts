class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function mergeTwoLists(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  // TODO: 首node需要移除，从第二个开始
  let retList = new ListNode();
  const header = retList;
  while (l1 && l2) {
    let minner;
    if (l1.val >= l2.val) {
      minner = l2;
      l2 = l2.next;
    } else {
      minner = l1;
      l1 = l1.next;
    }
    retList.next = minner;
    retList = retList.next;
  }

  retList.next = (l1 || l2)!;

  console.dir(header.next);
  return header.next;
}

function createNode(arr: number[]) {
  let ret = new ListNode();
  const head = ret;
  arr.forEach((a) => {
    ret.next = new ListNode(a);
    ret = ret.next;
  });
  return head.next;
}

const a = [1, 2, 5, 6];
const b = [1, 3, 4];
const a1 = createNode(a);
const b1 = createNode(b);

mergeTwoLists(a1, b1);
