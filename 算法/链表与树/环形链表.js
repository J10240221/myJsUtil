var hasCycle = function (head) {
  let show = head;
  let fast = head;
  while (fast && fast.next) {
    fast = fast.next.next;
    show = show.next;
    if (fast === show) {
      return true;
    }
  }
  return false;
};
