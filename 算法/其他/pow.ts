/* 50. Pow(x, n)
实现 pow(x, n) ，即计算 x 的 n 次幂函数（即，xn ）。

 

示例 1：

输入：x = 2.00000, n = 10
输出：1024.00000
示例 2：

输入：x = 2.10000, n = 3
输出：9.26100
示例 3：

输入：x = 2.00000, n = -2
输出：0.25000
解释：2-2 = 1/22 = 1/4 = 0.25 */

// 二分法，实现 O(log n) 的复杂度
function myPow(x: number, n: number): number {
  return n >= 0 ? quickMul(x, n) : 1 / quickMul(x, -n);

  function quickMul(x: number, num: number) {
    if (num == 0) {
      return 1;
    }

    // 除以二 向下取整 , 好像在 n 是很大的数 时会出错，【>>】一般的 case 可以过的
    const y = quickMul(x, num >>> 1);
    const ret = y * y;
    return num % 2 == 0 ? ret : ret * x;
  }
}
