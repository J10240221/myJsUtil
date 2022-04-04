/**
 * 防抖
 * delay 时间段内多次执行 只执行最后一次
 * @param {*} fn
 * @param {*} delay
 */
function debounce(fn, delay = 500) {
  let timerId = null;
  return function innerFn(...args) {
    if (timerId) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(() => {
      fn.call(this, ...args);
    }, delay);
  };
}

/**
 * 节流 这个要难些
 * 调用时，启动定会器，
 * 如果再次调用时 有定时器，则不处理
 * 否则 再次启动定时器
 *
 * 每次重新执行，则重置参数
 */
function throttle(fn, delay) {
  let timerId = null;
  // 保证执行 最后一次的 参数和 context
  let context = null;
  let argsCache = [];
  return function innerFn(...args) {
    context = this;
    argsCache = args;
    if (timerId) {
      return;
    }

    timerId = setTimeout(() => {
      fn.call(context, ...argsCache);
      timerId = null;
    }, delay);
  };
}

/**
 * lodash 实现的 cacheGenerator 是默认没有的，默认使用 函数的 第一个参数作为cacheKey
 * @param {*} fn
 * @param {*} cacheGenerator
 * @returns
 */
const memorize = (fn, cacheGenerator = JSON.stringify) => {
  const cacheMap = new Map();

  return function withMemoFn(...args) {
    const key = cacheGenerator(args);
    if (cacheMap.has(key)) {
      return cacheMap.get(key);
    }
    console.log("called");
    const ret = fn.call(this, ...args);
    cacheMap.set(key, ret);
    return ret;
  };
};

const add = (...args) => {
  return args.reduce((sum, num) => {
    return sum + num;
  }, 0);
};

const memoAdd = memorize(add);
memoAdd(1, 2, 3, 4, 5);
memoAdd(1, 2, 3, 4, 5);
memoAdd(1, 2, 3, 4, 5);
