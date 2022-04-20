/**
 * 科里化：也叫部分求值，
 * 可以灵活的实现 不同中间状态的函数的生成
 *
 * 比如
 * ①验证电话号码是否正确的函数，需要两个参数，
 * A:电话号码的正则
 * B:待验证值
 * ②验证邮箱号码是否正确的函数，需要两个参数，
 * A:邮箱的正则
 * B：待验证值
 *
 * 这样就就可以通过 科里化，生成分别 验证 ①和②的函数了
 */
function createCurry(fn, argsList = []) {
  return function CurriedFn(...args) {
    let argLen = fn.length;
    const newArgsList = [...argsList, ...args];
    if (newArgsList.length >= argLen) {
      return fn.call(this, ...newArgsList);
    }
    return createCurry(fn, newArgsList);
  };
}

// 第二种方式的科里化，更简单直接
function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.call(this, ...args);
    } else {
      return function (...args2) {
        return curried.call(this, ...args, ...args2);
      };
    }
  };
}

const add3 = (a, b, c) => {
  return a + b + c;
};
const curryAdd = curry(add3);
addWith10 = curryAdd(10);
addWith20 = addWith10(10);
console.log(addWith10(1, 2));
console.log(addWith10(4, 2));
console.log(addWith10(4, 4));
console.log(addWith20(5));
console.log(addWith20(15));

/**
 * 
// 实现一个add方法，使计算结果能够满足如下预期：
add(1)(2)(3) = 6;
add(1, 2, 3)(4) = 10;
add(1)(2)(3)(4)(5) = 15;
 */
function add(...args) {
  function inner(...args2) {
    return add.call(this, ...args, ...args2);
  }
  inner.valueOf = function () {
    console.log(args);
    return args.reduce((sum, num) => sum + num, 0);
  };
//   inner.toString = inner.valueOf;

  return inner;
}

console.log(add(1)(2)(3) == 6);
console.log(add(1, 2, 3)(4) == 10);
console.log(add(1)(2)(3)(4)(5) == 15);
