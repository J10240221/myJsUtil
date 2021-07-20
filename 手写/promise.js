function loadImg(url = '') {
  const img = new Image();
  img.src = url;
  return new Promise((resolve, reject) => {
    img.onload((ev) => {
      resolve(ev);
    });

    img.onerror((ev) => {
      reject(ev);
    });
  });
}

loadImg('').then(
  function succ(ev) {
    console.log('ev');
    return 1;
  },
  function err(ev) {
    console.log('ev');
  },
);

function getR() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(1);
    }, 1000);
  });
}

let d = getR()
  .then((data) => {
    console.log('then 1 :', data);
    console.log(data);
    return undefined;
  })
  .then((data) => {
    return new Promise((res, rej) => {
      const resData = Math.random();
      console.log('then 2 :', data);
      if (resData > 0.5) {
        res(resData);
      } else {
        rej(resData);
      }
    });
  })
  .then(123)
  .catch((err) => {
    console.log(err);
  });

// 执行 _resolve 的时候，执行 _thenCb

const pending = 'PENDING';
const resolve = 'RESOLVE';
const reject = 'REJECT';
const isFunc = (fn) => typeof fn === 'function';
class MyPromise {
  constructor(executor) {
    this._state = pending;
    this._value;
    this._onResolvedQueue = [];
    this._onRejectedQueue = [];
    executor(this._onResolved.bind(this), this._onRejected.bind(this));
  }
  _onResolved(value) {
    // 执行的时候，状态 变为 resolve，再执行 then 中的回到
    if (this._state !== pending) return;

    this._value = value;
    this._state = resolve;
    const run = () => {
      let cb;
      while ((cb = this._onResolvedQueue.shift())) {
        cb(this._value);
      }
    };

    setTimeout(run, 0);
  }
  _onRejected() {
    // 执行的时候，状态 变为 resolve，再执行 then 中的回到
    if (this._state !== pending) return;

    this._value = value;
    this._state = reject;
    const run = () => {
      let cb;
      while ((cb = this._onRejectedQueue.shift())) {
        cb();
      }
    };

    setTimeout(run, 0);
  }
  then(resolved, rejected) {
    // resolved 可以 返回 任意值
    // 返回一个新的 Promise

    return new MyPromise((nextRes, nextRej) => {
      const _onResolve = (newValue) => {
        if (!isFunc(resolved)) {
          // 不是函数则忽略，并 透穿？
          nextRes(newValue);
        } else {
          // 是函数
          const res = resolved(newValue);
          if (res instanceof MyPromise) {
            // 返回值还是 promise 则把它 拆开
            res.then(nextRes, nextRej);
          } else {
            nextRes(res);
          }
        }
      };
      const _onRejected = () => {
        //
      };

      switch (this._state) {
        case pending:
          this._onResolvedQueue.push(_onResolve);
          this._onResolvedQueue.push(_onRejected);
          break;
        case resolve:
          _onResolve(this._value);
          break;
        case reject:
          _onRejected(this._value);
          break;
      }
    });
  }

  catch(onRejected) {
    this.then(null, onRejected);
  }
}

let aa = new MyPromise((res, rej) => {
  console.log('0');

  setTimeout(() => {
    res('1');
  }, 1000);
});
