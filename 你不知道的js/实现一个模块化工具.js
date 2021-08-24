const MyModules = (function manager() {
  let modules = {};
  function define(moduleName, deps, moduleFn) {
    modules[moduleName] = moduleFn.apply(
      null,
      deps.map((dep) => modules[dep]),
    );
  }
  function get(moduleName) {
    return modules[moduleName];
  }
  return { define, get };
})();

// 使用方式
MyModules.define('bar', [], function () {
  function hello(name) {
    return 'hello :' + name;
  }
  return { hello };
});

MyModules.define('foo', ['bar'], function (bar) {
  const selfName = 'lily';
  function helloAgain() {
    console.log(bar.hello(selfName) + ', i want talk with you!');
  }

  return { helloAgain };
});

const bar = MyModules.get('bar');
const foo = MyModules.get('foo');
console.dir(MyModules);

console.log(bar.hello('123'));

foo.helloAgain();
