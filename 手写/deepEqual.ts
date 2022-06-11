const types = ['Array', 'Object', 'Function'] as const;

/**
 * 生成 单个类型判读的函数，属性名为： isObject, isArray
 */
const typeFuncObj = types.reduce(
  (prev, type) => {
    // @ts-ignore
    prev[`is${type}`] = (target: any) => ({}.toString.call(target).slice(8, -1) === type);
    return prev;
  },
  {} as {
    isArray: (p: any) => p is any[];
    isObject: (p: any) => p is { [k: string]: any };
    isFunction: (p: any) => p is (...params: any[]) => any;
  },
);

const { isArray, isObject, isFunction } = typeFuncObj;

const isArrOrObj = (obj: any): obj is any[] | { [k: string]: any } => isArray(obj) || isObject(obj);

const isObjectLike = (target: any): target is object => {
  return target !== null && typeof target === 'object';
};

const deepEqual = (target1: any, target2: any): boolean => {
  if (target1 === target2) {
    return true;
  }

  let res = true;
  if ((isArray(target1) && isArray(target2)) || (isObject(target1) && isObject(target2))) {
    // 都是 数组 | 对象
    const t1Props = Object.keys(target1);
    const t2Props = Object.keys(target2);
    if (t1Props.length !== t2Props.length) {
      res = false;
    }

    res &&
      (function compareProp() {
        // 依次比较每一个属性
        for (const prop of t1Props) {
          res = deepEqual(target1[prop], target2[prop]);
          if (res === false) {
            // 提前退出，节省一些不必要的循环的执行
            break;
          }
        }
      })();
  } else {
    // TODO: 其他的 类型都在这块补充
    res = target1 === target2;
  }

  return res;
};

let obj1 = { a: 1, b: 2, c: { d: { a: {} } }, e: { 0: 1 } };
let obj2 = { a: 1, b: 2, c: { d: { a: [] } }, e: { 0: 1 } };
let obj3 = { a: 1, b: 2, c: { d: { a: [] } }, e: { 0: 1 } };

console.log(deepEqual(obj1, obj2));
console.log(deepEqual(obj2, obj3));
