function findKthLargest(nums: number[], k: number): number {
  let left: number[] = [];
  let right: number[] = [];
  const pointIdx = nums.length - 1;
  const pointVal = nums[pointIdx];

  for (let i = 0; i < pointIdx; i++) {
    const curr = nums[i];
    if (curr > pointVal) {
      right.push(curr);
    } else {
      left.push(curr);
    }
  }
  if (k === right.length + 1) {
    return pointVal;
  } else if (k > right.length + 1) {
    return findKthLargest(left, k - right.length - 1);
  } else {
    return findKthLargest(right, k);
  }
}

const n = [3, 2, 1, 5, 6, 4];
const k = 1;
const k2 = 2;
const k3 = 3;
const k4 = 4;

console.log(findKthLargest(n, k));
console.log(findKthLargest(n, k2));
console.log(findKthLargest(n, k3));
console.log(findKthLargest(n, k4));
