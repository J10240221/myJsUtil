// let subjectid = 0;
// let observerid = 0;

// class Subject {
//   constructor(name) {
//     // 观察者队列
//     this.observers = [];
//     this.id = subjectid++;
//     this.name = name;
//   }

//   // 添加观察者
//   addListener(observer) {
//     this.observers.push(observer);
//   }

//   // 删除观察者
//   removeListener(observer) {
//     this.observers = this.observers.filter((item) => item.id !== observer.id);
//   }

//   // 通知
//   dispatch() {
//     this.observers.forEach((item) => {
//       item.watch(this.name);
//     });
//   }
// }

// class Observer {
//   constructor() {
//     this.id = observerid++;
//   }
//   watch(subjectName) {
//     console.log(`观察者${this.id}发现了被观察者 ${subjectName} 产生了变化。`);
//   }
// }

// const sub = new Subject('xxx');
// const observer1 = new Observer();
// const observer2 = new Observer();

// sub.addListener(observer1);
// sub.addListener(observer2);

// sub.dispatch();

let subId = 0;
let observerId = 0;
class Subject {
  constructor(name) {
    this.name = name;
    this.subId = subId++;
    this.observer = {}; // 订阅列表
  }

  addListener(typeName, observer) {
    if (this.observer[typeName] && this.observer[typeName].length > 0) {
      this.observer[typeName].push(observer);
    } else {
      this.observer[typeName] = [observer];
    }
  }

  removeListener(typeName) {
    delete this.observer[typeName];
  }

  dispatch(typeName) {
    this.observer[typeName] && this.observer[typeName].forEach((cb) => cb());
  }
}

const sub = new Subject('xxx');

sub.addListener('click', () => {
  console.log('click');
});
sub.addListener('click', () => {
  console.log('click2');
});
sub.addListener('mouseover', () => {
  console.log('mouseover');
});

sub.dispatch('mouseover');
sub.dispatch('click');

/*********** vue ***********/

class Observer {
  constructor(data) {
    this.data = data;
    this.walk(data);
  }
  walk(data) {
    Object.keys(data).forEach((key) => {
      this.defineReactive(data, key, data[key]);
    });
  }
  defineReactive(data, key, val) {
    const dep = new Dep();
    Object.defineProperty(data, key, {
      enumerable: true,
      configurable: true,
      get: () => {
        if (Dep.target) {
          dep.addSub(Dep.target);
        }
        return val;
      },
      set: function (newVal) {
        if (newVal === val) {
          return;
        }
        val = newVal;
        dep.notify();
      },
    });
  }
}

function observe(value, vm) {
  if (!value || typeof value !== 'object') {
    return;
  }
  return new Observer(value);
}

class Dep {
  constructor() {
    this.subs = [];
  }
  addSub(sub) {
    this.subs.push(sub);
  }
  notify() {
    this.subs.forEach(function (sub) {
      sub.update();
    });
  }
}

class Watcher {
  constructor(vm, exp, cb) {
    this.vm = vm;
    this.exp = exp;
    this.cb = cb;
    this.value = this.get();
  }
  update() {
    this.run();
  }
  run() {
    var value = this.vm.data[this.exp];
    var oldVal = this.value;
    if (value !== oldVal) {
      this.value = value;
      this.cb.call(this.vm, value, oldVal);
    }
  }
  get() {
    Dep.target = this;
    // 访问data，触发 get 执行，把当前的 Watcher 实例，添加到 Dep 中
    var value = this.vm.data[this.exp];
    // 添加成功之后，释放掉自身，其他的实例还需要该引用
    Dep.target = null;
    return value;
  }
}

class Vue {
  constructor(options, el, exp) {
    this.data = options.data;

    // 劫持 data
    observe(this.data);

    // 初始化显示
    el.innerHTML = this.data[exp];

    // 创建 Watcher 实例
    new Watcher(this, exp, function (value) {
      el.innerHTML = value;
    });
    return this;
  }
}

var ele = document.querySelector('#wrap');
var vue = new Vue(
  {
    data: {
      text: 'hello world',
    },
  },
  ele,
  'text',
);

document.addEventListener(
  'click',
  function () {
    vue.data.text = `${vue.data.text} vue click.`;
  },
  false,
);
