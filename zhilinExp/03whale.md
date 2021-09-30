- 上来就是 一道算法题目(知识点如下)
  - js 的两个字符串的大小比较，是首字符 依次比较的
  - 大致聊了下 时间复杂度的优化

```ts
// 1. 时间范围: ["00:00", "23:59"]
//   输入：
// [
//     ["23:00","23:50"],
//     ["00:00","01:00"],
//     ["00:30","01:20"],
//     ["03:00","03:20"],
//     ["03:20","03:40"],
//   ]
//   输出：
//   [
//      ["00:00","01:20"],
//      ["03:00","03:40"],
//      ["23:00","23:50"],
//  ]

// function mergeTimeRanges(ranges){

// }

// ————————

const a = [
  ['23:00', '23:50'],
  ['00:00', '01:00'],
  ['00:30', '01:20'],
  ['03:00', '03:20'],
  ['03:20', '03:40'],
];
// 输出：
// [
//    ["00:00","01:20"],
//    ["03:00","03:40"],
//    ["23:00","23:50"],
// ]

function mergeTimeRanges(ranges: string[][] = a) {
  /**
   * 判断是否 在 origin中间
   * @param target
   * @param origin
   */
  const isBetweenFn = (target: string, origin: string[]) => {
    return [...origin, target].sort()[1] === target;
  };

  const getWrapIndex = (target: string, origin: string[][]) => {
    return origin.findIndex((item) => isBetweenFn(target, item));
  };

  //
  /**
   * [
   *  [2300, 2350 ],
   *  [0000, 0100],
   * ]
   */
  // const numRanges = ranges.map(([start, end]) => {
  //   return [_timeToNum(start), _timeToNum(end)];
  // });

  function _main(_ranges: string[][]): string[][] {
    let ret = _ranges.reduce((res, curr) => {
      curr.forEach((time, _i, arr) => {
        const targetIndex = getWrapIndex(time, res);
        if (targetIndex > -1) {
          const bothArr = [...arr, ...res[targetIndex]].sort();
          res[targetIndex] = [bothArr[0], bothArr[3]]; // 取最大 最小
        } else {
          res.push(arr);
        }
      });

      //

      return res;
    }, [] as string[][]);

    // 做一次检查
    if (ret.length !== _ranges.length) {
      ret = _main(ret);
    }

    return ret;
  }

  return _main(ranges).sort((_a, _b) => {
    return Number.parseFloat(_a[0]) - Number.parseFloat(_b[0]);
  });
}

console.log(mergeTimeRanges());
```

- class 和 function Component 有什么不同，他们的 setState 更新时机有什么不同
- useLayoutEffect 和 useEffect 的区别
- lane 模型的了解，为什么 采用二进制的数据格式，有什么优点
- 问了我 写的 react-route 版本的 keep-alive 的实现细节，和意义
- setState 什么时候是同步的

- 二面
  - 100 个小图片 如何实现并发加载，前端如何处理并发的问题
  - 如有有用户反映 应用很慢，很卡，这是应该怎么办
  - cdn 上面如果和资源包不一致，如何处理
  - react-router 的懒加载 是如何实现的，还有 webpack 的分包(说我的 keep-alive 会导致 chunk 很大？)
  - redux 的数据流,是同步还是异步的,如何处理异步逻辑，applyMiddleware 的机制
  - proxy 层其实 antd 是有配置可以直接支持的
  - history.back() 会刷新页面吗?

二面挂了，回答的不好，特别是 redux 的详细追问，react-router keep-alive 的对 包拆分的影响的了解不足，体现出来就是没有技术深度，了解不够
