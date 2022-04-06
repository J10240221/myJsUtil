function main() {
  let maxW = 0; // 结果放到maxW中
  const weight = [5, 4, 2]; // 物品重量
  // const n = 5; // 物品个数
  const w = 13; // 背包承受的最大重量

  /**
   *
   * @param i 第i 件物品
   * @param cw 背包当前重量
   */
  function f(cw = 0, i = 0) {
    // console.log(cw, i);
    if (i === weight.length || cw === w) {
      maxW = Math.max(maxW, cw);
      return;
    }

    // 对 i 的处理，通过这种方式，控制了 每个物品 都会被【装 | 不装】，并且是执行一次
    console.log("不装", i);

    f(cw, i + 1); // 不装当前的物品，所以重量不加
    if (cw + weight[i] <= w) {
      console.log("装", i);

      // 合理区间内 再去装，剪枝避免不必要的运算
      f(cw + weight[i], i + 1);
    }
  }

  f();
  console.log(maxW);

  return maxW;
}

main();
