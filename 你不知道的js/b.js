'use strict';

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'next', value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'throw', err);
      }
      _next(undefined);
    });
  };
}

function bar() {
  return _bar.apply(this, arguments);
} // foo().next().next().xx()

function _bar() {
  _bar = _asyncToGenerator(
    /*#__PURE__*/ regeneratorRuntime.mark(function _callee() {
      var aaa;
      return regeneratorRuntime.wrap(function _callee$(_context2) {
        while (1) {
          switch ((_context2.prev = _context2.next)) {
            case 0:
              _context2.next = 2;
              return 33;

            case 2:
              aaa = _context2.sent;
              console.log(aaa);

            case 4:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee);
    }),
  );
  return _bar.apply(this, arguments);
}
