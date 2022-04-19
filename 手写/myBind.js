Function.prototype.myBind = function myBind(context, ...args) {
  if (typeof this !== "function") {
    throw new TypeError("err!");
  }

  const fn = this;
  return function (...params) {
    fn.call(context, ...args, ...params);
  };
};
