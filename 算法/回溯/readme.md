# 2024-12-29

- 组合 和 全排列 需要再做一次，深入理解 回溯的模板

# 总结模板

回溯的模板如下

```ts
const temp = (params) => {
  const result: any[] = [];
  const backtrack = (singleResult: any, startIndex: number) => {
    if (终止条件) {
      singleResult符合条件 && result.push([...singleResult]);
      return;
    }

    for (const i = startIndex; i < params.length; i++) {
      /* 回溯的核心其实是，针对每个节点，都选择 【放】 和 【不放】 */

      // ***放***
      singleResult.push(i);
      backtrack(singleResult, i + 1); // singleResult 【放】当前节点，并进去下一个递归
      // backtrack(singleResult, i); // 同行，这种是节点可以重复的

      // ***不放***
      singleResult.pop(); // singleResult 【不放】当前节点，继续后续的循环
    }
  };

  backtrack([], 1);
};
```

```ts
backtracking(参数) {
    if (终止条件) {
        存放结果;
        return;
    }

    for (选择：本层集合中元素（树中节点孩子的数量就是集合的大小）) {
        处理节点;
        backtracking(路径，选择列表); // 递归
        回溯，撤销处理结果
    }
}
```
