/*********** 笨马的题目 ***********/
const input = {
  a: 1,
  b: [{ c: true }, 1, 2, [3]],
  d: { e: 2, f: 3 },
  g: null,
};

const output = {
  a: 1,
  'b[0].c': true,
  'b[1]': 1,
  'b[2]': 2,
  'b[3][0]': 3,
  'd.e': 2,
  'd.f': 3,
  g: null, // null 或者 undefined 丢弃÷
};

function isObj(tar: unknown): tar is Record<string, any> {
  return Object.prototype.toString.call(tar) === '[object Object]';
}

function isArr(tar: unknown): tar is any[] {
  return Object.prototype.toString.call(tar) === '[object Array]';
}

function isObjOrArr(tar: unknown) {
  return isObj(tar) || isArr(tar);
}

/**
 * 思路
 * 对每个 val 递归遍历，不断累加key,直到 val 是原始值类型 则是递归出口
 * @param params
 */
function transfer(params: Record<string, any> = input) {
  function dfs(val: any, currKey: string, ret: Record<string, any>) {
    if (isObjOrArr(val)) {
      if (isArr(val)) {
        val.forEach((item, index) => {
          const nextKey = `${currKey}[${index}]`;
          dfs(item, nextKey, ret);
        });
      } else {
        Object.entries(val).forEach(([k, v]) => {
          const nextKey = `${currKey}.${k}`;
          dfs(v, nextKey, ret);
        });
      }
    } else {
      // 终点
      ret[currKey] = val;
    }
  }

  const ret = {};
  Object.entries(params).forEach(([key, val]) => {
    dfs(val, key, ret);
  });

  return ret;
}

transfer();
console.log('笨马的题解是否正确', JSON.stringify(transfer()) === JSON.stringify(output));

/*********** 字节供应链的题目 ***********/

const input2 = {
  a_b_c: 1, // A行
  a_b_d: 2, // B行
  a_e_g_h: 2, // C行
};

/**
 * 思路：
 * A行: ret[a] = {};     prev[b] = {}; prev[c] = 1;
 * B行: ret[a] = ret[a]; ret[a][b] = ret[a][b]
 */

const output2 = {
  a: {
    b: { c: 1, d: 2 },
    e: {
      g: { h: 2 },
    },
  },
};

/**
 * 递归版本
 * 思路：key 转变为 string[], 深度赋值，直到 最后一个key 则是出口
 * 
 * @param params 
 * @returns 
 */
function transferWithRecursion(params = input2) {
  function dfs(keys: string[], val: number, target: any = {}) {
    const currK = keys.shift() as string;
    if (keys.length === 0) {
      // 现在是最后一个 key了
      target[currK] = val;
    } else {
      target[currK] = dfs(keys, val, target[currK]);
    }
    return target;
  }

  const ret: Record<string, any> = {};

  Object.entries(params).forEach(([key, val]) => {
    const keyList = key.split('_');
    dfs(keyList, val, ret);
  });

  return ret;
}

// 迭代版本
function transferWithIterator(params = input2) {
  const ret: Record<string, any> = {};
  Object.entries(params).forEach(([key, val]) => {
    const keyList = key.split('_');

    let prevObj: any = ret;
    for (let i = 0; i < keyList.length - 1; i++) {
      const k = keyList[i];
      prevObj[k] = prevObj[k] || {};
      prevObj = prevObj[k];
    }
    prevObj[keyList.at(-1) as string] = val;
  });
  return ret;
}

console.log(JSON.stringify(transferWithRecursion()) === JSON.stringify(output2));
console.log(JSON.stringify(transferWithIterator()) === JSON.stringify(output2));
