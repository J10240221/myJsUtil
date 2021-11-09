const types = ['Array', 'Object', 'Function'];

/**
 * 生成 单个类型判读的函数，属性名为： isObject, isArray
 */
const typeFuncObj = types.reduce((prev, type) => {
  prev[`is${type}`] = (target) => ({}.toString.call(target).slice(8, -1) === type);
  return prev;
}, {});

const { isArray, isObject, isFunction } = typeFuncObj;

const isArrOrObj = (obj) => isArray(obj) || isObject(obj);

/**
 * 克隆函数
 * 不支持 Set Map
 * @param {*} obj
 * @param {*} needDeep
 * @param {*} cache
 */
const clone = (obj, needDeep = true, cache = new Map()) => {
  if (!isArrOrObj(obj)) return obj;

  let ret = Array.isArray(obj) ? [] : {};

  if (cache.get(obj)) {
    /* 避免循环引用 */
    return cache.get(obj);
  }
  cache.set(obj, ret);

  Object.entries(obj).forEach(([key, val]) => {
    if (val instanceof Date) {
      val = new Date(val.getTime());
    } else if (val instanceof RegExp) {
      val = new RegExp(val);
    }

    const shouldDeep = isArrOrObj(val) && needDeep;

    // 因为这里是第一层的拷贝，不需要 深度 clone 则直接返回当前的属性即可，
    ret[key] = shouldDeep ? clone(val, needDeep, cache) : val;
  });

  return ret;
};

const a = {
  a: '2',
  b: /abc/g,
  c: new Date('2021-01-01'),
  d: [1, 2, [3], { bb: 1 }],
  e: ['2', 2, { dd: 1 }, /abc/g, new Date('2021-01-01')],
};
a.tar = a;

const ac = clone(a);
const ac2 = clone(a, false);
console.log(a);
console.log(ac);
console.log(ac2);
console.log(a.d === ac.d); // should be false
console.log(a.d === ac2.d); // should be true
console.log(a.tar === ac.tar); // should be false
