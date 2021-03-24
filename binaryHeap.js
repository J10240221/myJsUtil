/**
 * 最大 最小堆的实现
 */
class BinaryHeap {
  constructor(compare, arr) {
    this.compare = compare;
    if (Array.isArray(arr) && arr.length > 0) {
      this.heap = arr;
      this.size = arr.length;
      this.buildHeap();
    } else {
      this.heap = [];
      this.size = 0;
    }
  }

  isEmpty() {
    return this.size == 0;
  }

  getParentIndex(sonIndex) {
    if (sonIndex <= 0) {
      return 0;
    }

    return Math.floor((sonIndex - 1) / 2);
  }

  getLeftIndex(parentIndex) {
    return 2 * parentIndex + 1;
  }

  getRightIndex(parentIndex) {
    return this.getLeftIndex(parentIndex) + 1;
  }

  getTopNode() {
    return this.heap[0];
  }

  swap(indexA, indexB) {
    let temp = this.heap[indexA];
    this.heap[indexA] = this.heap[indexB];
    this.heap[indexB] = temp;
  }

  // 加入 堆数据中
  push(node) {
    if (this.size === 0) {
      this.size++;
      this.heap[0] = node;
      return;
    }
    this.size++;
    let index = this.size - 1;
    this.heap[index] = node;
    while (index !== 0 && this.compare(this.heap[index], this.heap[this.getParentIndex(index)])) {
      const pIndex = this.getParentIndex(index);
      this.swap(index, pIndex);
      index = pIndex;
    }
  }

  // 弹出 顶推
  pop() {
    let root;
    if (this.size <= 0) {
      root = null;
    } else if (this.size === 1) {
      this.size--;
      root = this.heap[0];
      this.heap = [];
    } else {
      this.size--;
      root = this.heap[0];
      // 把最后一项 换到头部
      this.heap[0] = this.heap[this.size];

      // 移除最后一项
      this.heap.length = this.size;
      this.heapify(0);
    }
    return root;
  }

  /**
   * 堆化
   * 先按照 最小堆 来思考
   * 都是跟自己的子比较，如果子比自己大，则交换位置
   * @param {*} parentIndex
   */
  heapify(parentIndex) {
    const leftIndex = this.getLeftIndex(parentIndex);
    const rightIndex = this.getRightIndex(parentIndex);
    let smallIndex = parentIndex;
    if (leftIndex < this.size && this.compare(this.heap[leftIndex], this.heap[parentIndex])) {
      smallIndex = leftIndex;
    }
    if (rightIndex < this.size && this.compare(this.heap[rightIndex], this.heap[smallIndex])) {
      smallIndex = rightIndex;
    }

    if (smallIndex !== parentIndex) {
      // 父级 不是 最小的，说明需要 转换
      this.swap(smallIndex, parentIndex);
      this.heapify(smallIndex);
    }
  }

  buildHeap() {
    // 从最远离根部的 父级 开始，然后每个都要 执行 heapify
    for (let i = Math.floor((this.size - 1) / 2); i >= 0; i--) {
      this.heapify(i);
    }
    // 构建 堆
  }
}

// 小顶推用的
const minCompare = (a, b) => a < b;
const maxCompare = (a, b) => a > b;

const a = new BinaryHeap(minCompare);
a.push(4);
a.push(3);
a.push(5);
a.push(111);
a.push(12);
a.push(1);
a.pop();

const minHeap = new BinaryHeap(minCompare, [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]);
const maxHeap = new BinaryHeap(maxCompare, [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]);
