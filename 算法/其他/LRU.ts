// 需要 O1 的话 只能用链表，但是链表查询是 On,所以需要结合 hash表 + 链表
/**
 * 利用 Map 自带LRU排序的特性
 * 直接使用 Map 即可快捷实现
 */
class LRUCache {
  cacheMap: Map<number, number>;
  capacity: number;
  constructor(capacity: number) {
    this.cacheMap = new Map();
    this.capacity = capacity;
  }

  get(key: number): number {
    if (this.cacheMap.has(key)) {
      const value = this.cacheMap.get(key)!;
      this.cacheMap.delete(key);
      this.cacheMap.set(key, value);
      return value;
    }
    return -1;
  }

  put(key: number, value: number): void {
    this.cacheMap.delete(key); // 需要删除，否则不会重新排序
    this.cacheMap.set(key, value);
    if (this.cacheMap.size > this.capacity) {
      // 移除队头的数据
      this.cacheMap.delete(this.cacheMap.keys().next().value);
    }
  }
}
