class EventEmitter {
  constructor() {
    this._events = Object.create(null);
  }

  on(type, listener) {
    (this._events[type] || (this._events[type] = [])).push(listener);

    return () => {
      this.off(type, listener);
    };
  }

  off(type, listener) {
    if (listener === undefined) {
      // 未传入 listener 则清空此 type的监听, 这个逻辑 可不要
      delete this._events[type];
    } else {
      if (this._events[type]) {
        const targetIndex = this._events[type].findIndex((f) => f === listener);
        this._events[type].splice(targetIndex >>> 0, 1);
      }
    }
  }

  once(type, listener) {
    const onceFnWrapper = (...args) => {
      this.off(type, onceFnWrapper);
      listener.call(this, ...args);
    };
    this.on(type, onceFnWrapper);

    // 不能用下面这种方式，会影响覆盖 其他的 同名 type 的事件
    // this._events[type] = [onceFnWrapper];
  }

  emit(type, ...args) {
    if (this._events[type]) {
      this._events[type].forEach((listener) => {
        listener.call(this, ...args);
      });
    }
  }
}

const eventEmitter = new EventEmitter();

function callA(...args) {
  console.log('A', ...args);
}
function callB(...args) {
  console.log('B', ...args);
}

eventEmitter.once('a', callA);
const offB = eventEmitter.on('b', callB);

eventEmitter.emit('a', 1, 2, 3, '22');
eventEmitter.emit('a', 1, 2, 3, '22');
eventEmitter.emit('a', 1, 2, 3, '22');
eventEmitter.emit('b', 1, 2, 3, '22');
offB();
eventEmitter.emit('b', 1, 2, 3, '22');
eventEmitter.emit('b', 1, 2, 3, '22');
