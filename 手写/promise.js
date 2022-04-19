function loadImg(url = "") {
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

loadImg("").then(
  function succ(ev) {
    console.log("ev");
    return 1;
  },
  function err(ev) {
    console.log("ev");
  }
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
    console.log("then 1 :", data);
    console.log(data);
    return undefined;
  })
  .then((data) => {
    return new Promise((res, rej) => {
      const resData = Math.random();
      console.log("then 2 :", data);
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

const pending = "PENDING";
const resolve = "RESOLVE";
const reject = "REJECT";
const isFunc = (fn) => typeof fn === "function";
class MyPromise {
  static resolve(v) {
    return new MyPromise((res) => {
      res(v);
    });
  }

  static reject(v) {
    return new MyPromise((res, rej) => {
      rej(v);
    });
  }

  static all(...promiseList) {
    // 元组，[resolve 的数量，目标总数量]
    const processTuple = [0, promiseList.length];
    // TODO:
    const resultList = [];
    return new MyPromise((res, rej) => {
      promiseList.forEach((p) => {
        p.then((v, index) => {
          processTuple[0]++;
          resultList[index] = v;
          if (processTuple[0] === processTuple[1]) {
            // finish all
            res(resultList);
          }
        }).catch((e) => {
          rej(e);
        });
      });
    });
  }

  static race(...promiseList) {
    return new MyPromise((res, rej) => {
      promiseList.forEach((p) => {
        p.then((v) => {
          res(v);
        }).catch((e) => {
          rej();
        });
      });
    });
  }

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
    if (this._onRejectedQueue.length === 0) {
      throw new Error("unHandle Promise rejected");
    }
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
          setTimeout(() => {
            _onResolve(this._value);
          });
          break;
        case reject:
          setTimeout(() => {
            _onRejected(this._value);
          });
          break;
      }
    });
  }

  catch(onRejected) {
    this.then(null, onRejected);
  }
}

let aa = new MyPromise((res, rej) => {
  console.log("0");

  setTimeout(() => {
    res("1");
  }, 1000);
});

/* 
执行 promise 有**2**个队列的的概念

1. 暂存队列，这里并不会执行，正如上面的 this._onResolvedQueue 
2. 放入 promiseJob 中的队列，这里在等待 下一个 微任务的执行时机，直接执行

确保理解如下题目： 理解为什么 输出 【 0 1 2 3 4 】 即可
const p1 = new Promise((resolve) => {
  resolve()
}).then(function f1() { // ① f1 直接加入 promiseJob(内部为f1) 等待调度执行
  console.log(1)
  const p2 = new Promise(resolve => {
    resolve()           
  }).then(function f3() {// ③由于p2直接 resolve,状态确定，所以 f3 then 直接加入 promiseJob(f3)
    console.log(2)
  }).then(function f4() { // ③执行完，就把 f4也添加到了 promiseJob(f2 -> f4)
    console.log(4)
  })
}).then(function f2() { // ②f2 加入 _onResolvedQueue 暂存队列，因为代码是同步执行完的  ④上一层 相当于 resolve(undefined) 所以，②中添加到 promiseJob(f3 -> f2)
  console.log(3)
})

console.log(0)

如有疑问，详见  https://xiaozhuanlan.com/advance/5839760214
 */

new Promise((resolve) => {
  resolve();
})
  .then(() => {
    new Promise((resolve) => {
      resolve();
    })
      .then(() => {
        console.log(1);
      })
      .then(() => {
        console.log(2);
      })
      .then(() => {
        console.log(3.1);
      });
  })
  .then(() => {
    console.log(1.1);
    new Promise((resolve) => {
      resolve();
    })
      .then(() => {
        new Promise((resolve) => {
          resolve();
        })
          .then(() => {
            console.log(4);
          })
          .then(() => {
            console.log(6);
          });
      })
      .then(() => {
        console.log(5);
      });
  })
  .then(() => {
    console.log(3);
  });
console.log(0);
