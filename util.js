/**
 * TODO: 没有考虑 type = radio 等情况， 仅仅考虑了最普通的输入框的情况
 * 这是获取form中所有控件的序列化值； 最终的值形如： {name: "a", age: 20}
 * @param {string} formCssSelector ex: [form, #myForm]
 * @returns {object}
 */
function serializeFormData(formCssSelector = 'form') {
  const items = document.querySelectorAll(`${formCssSelector} *[name]`);
  const itemsArr = Array.prototype.slice.call(items);
  const dataJsonObj = itemsArr.reduce((accum, currObj, index, array) => {
    return { ...accum, [currObj.name]: currObj.value };
  }, {});
  return dataJsonObj;
}
