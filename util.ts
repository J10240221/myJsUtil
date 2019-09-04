/**
 * TODO: 没有考虑 type = radio 等情况， 仅仅考虑了最普通的输入框的情况
 * 这是获取form中所有控件的序列化值； 最终的值形如： {name: "a", age: 20}
 * @param {string} formCssSelector ex: [form, #myForm]
 * @returns {object}
 */
function serializeFormData(formCssSelector = 'form') {
  const items = document.querySelectorAll(`${formCssSelector} *[name]`);
  const itemsArr: [] = Array.prototype.slice.call(items);
  const dataJsonObj = itemsArr.reduce((accum, currObj, index, array) => {
    return { ...accum, [currObj.name]: currObj.value };
  }, {});
  return dataJsonObj;
}

/**
 * 函数组合
 * 返回的结构为一个【组合函数】，可以执行嵌套 调用，具体如下
 *
 * 例如有三个函数分别是:
 * var toUpperCase = (str) => str.toUpperCase()
 * var reverse = (arr) => arr.reverse()
 * var head = (arr) => arr[0]
 *
 * 常规的要把他们三 合并为一个函数，需要如下操作
 * var reverseHeadUpperCase = (arr) => toUpperCase(head(reverse(arr)))
 *
 * 而采用 compose 函数，则可以转话为 如下 方式即可
 * var reverseHeadUpperCase = compose(toUpperCase, head, reverse)
 * @param arg {Function}
 */
const compose = (...arg) => initValue =>
  arg.reduceRight((prevV, currFn) => currFn(prevV), initValue);

// 柯理化 还不理解，写不来
// function curryFn(fn: Function, ...arg: any[]) {
//   // 柯理化
//   let length = fn.length;
//   let listLen = arg.length;

//   if (listLen < length) {
//     //
//   } else if (listLen === length) {
//     return fn.apply(null, ...arg);
//   }
// }

/**
 * 检查等式左右两边差的绝对值是否小于最小精度，才是正确的比较浮点数的方法
 * 解决 0.1 + 0.2 !== 0.3 的问题
 * @param floatNumberA 浮点数
 * @param floatNumberB 浮点数
 */
function isFloatNumberEqual(floatNumberA: number, floatNumberB: number) {
  return Math.abs(floatNumberA - floatNumberB) <= Number.EPSILON;
}

export { serializeFormData, compose, isFloatNumberEqual };
