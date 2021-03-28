/**
 * 单例模式 的 通用高阶函数
 * @param {function} fn
 */
function getSingle(fn) {
  let result;
  return function (...args) {
    return result || (result = fn.apply(this, ...args));
  };
}
