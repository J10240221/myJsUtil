const nQueue = (n: number) => {
  const Q = 'Q';
  const E = '.';

  const res: string[] = [];

  // 构造一个 n * n 的二维矩阵
  const resItemHelper = new Array(n)
    .fill(null)
    .map(() => new Array(n).fill(undefined).map(() => E)) as string[][];

  /*
   以行为最小单位，进行 回溯遍历， 
   内部遍历每一列 判断是否 合法，
   合法 -> 塞进 resItemHelper
    边界 resItemHelper.length === n
    再走到下一行
   非法 结束
  **/
  const backTrack = (item: string[][], row: number) => {
    const len = item.length;

    for (let col = 0; col < len; col++) {
      const isVal = isValFn(item, row, col);

      if (isVal) {
        item[row][col] = Q;

        const isOk = item.every((it) => it.includes(Q));
        if (isOk) {
          // 需要 深拷贝，否则后续会被重置 为空
          res.push(JSON.parse(JSON.stringify(item)));
        }

        if (row < item.length - 1) {
          backTrack(item, row + 1);
        }

        // 后续
        item[row][col] = E;
      } else {
        if (row === 0) {
          console.log('col', col);
        }
        continue;
      }
    }
  };

  backTrack(resItemHelper, 0);

  console.log('res', res);
  return res;

  /* 
+Q++
+++Q
Q+++
++Q+
 */
};

const isValFn = (item: string[][], row: number, col: number): boolean => {
  var n = item.length;
  // 检查列是否有皇后互相冲突
  for (var i = 0; i < n; i++) {
    if (item[i][col] === 'Q') {
      return false;
    }
  }
  // 检查右上方是否有皇后互相冲突
  for (var i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
    if (item[i][j] === 'Q') {
      return false;
    }
  }
  // 检查左上方是否有皇后互相冲突
  for (var i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
    if (item[i][j] === 'Q') {
      return false;
    }
  }
  return true;
};

nQueue(4);
