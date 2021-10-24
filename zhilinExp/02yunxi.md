- cookie sessionStorage localStorage 的区别
- css 盒模型，ie 布局和 标准布局
- webpack 的编译流程
- 箭头函数 和 普通函数的区别
- fiber 的理解
- vue 双向绑定的原理
- 为什么说虚拟 dom 快
- 多个项目如何实现各种配置文件的 共享
  - 新项目可以通过 monorepo
  - 老项目可以通过 subModule 的方式

对方要 vue 技术栈

# 二面(以为挂，结果竟然没挂)

- 继承的方式有哪些(我觉得回答一种就行了吧)

  - 寄生组合继承(babel 实现的 class 的 extends 的转译 也是使用的这种方式实现的)
    - 实际是通过借用「构造函数」来继承「属性」，通过「原型链」形式来继承「方法」。

  ```js
  // 创建父类的原型新实例，赋值给子类的原型，实现原型方法属性的继承，同时与父类的原型隔离
  const Son.prototype = Object.create(Parent.prototype);
  // 修正子类原型上的 构造器的指向
  Son.constructor = Parent.constructor;

  ```

- promise 和 async await 的区别
- webpack 熟吗？有写过插件吗
- js 的事件循环机制
- 项目做过哪些优化，哪些亮点

```js
class Son extends Par {
  a() {}
}

function Son() {

}

Son.prototype = new Par();

Son.

```

# 三面（现场面）

- 表现得还不错，展示出了自己的能力但是最后
- hr 通知 部门那边觉得不合适，或许是 还不够牛逼，也只是 普通的 4 年开发，再加上不是 vue 技术栈的
