// function middleware (ctx, next) {
//     ctx.xxx = xxx
//     next() // 调用next会执行下一个中间件，如果不调用，则不会执行后面注册的中间件
// }

// 使用的时候把他加入到目标系统中：
// app.use(middleware)

// 同步逻辑的 中间件
const app = {
  fns: [],
  use(fn) {
    this.fns.push(fn);
  },
  callback(ctx) {
    console.log(ctx.count);
  },
  run(ctx) {
    let index = 0;
    const next = () => {
      index++;
    };

    this.fns.forEach((fn, i) => {
      if (i === index) fn(ctx, next);
    });

    if (index == this.fns.length) this.callback(ctx);
  },
};

app.use(function (ctx, next) {
  console.log(ctx.count);
  ctx.count = 1;
  console.log(ctx.count);
  next();
  ctx.count = 11;
});
app.use(function (ctx, next) {
  console.log(ctx.count);
  ctx.count = 2;
  next();
});
app.use(function (ctx, next) {
  console.log(ctx.count);
  ctx.count = 3;
  next();
});
var ctx = {
  count: 0,
};
// app.run(ctx);

// 支持异步的中间件
const asyncApp = {
  fns: [],
  use(fn) {
    this.fns.push(fn);
  },
  callback(ctx) {
    console.log(ctx.count);
  },
  run(ctx) {
    // ****关键在于 next的封装****
    const next = () => {
      const fn = this.fns.shift();
      fn?.(ctx, next);
      if (fn === undefined) this.callback(ctx);
    };

    next();
  },
};

asyncApp.use(function (ctx, next) {
  console.log(ctx.count);
  ctx.count = 1;
  console.log(ctx.count);
  setTimeout(() => {
    ctx.count = 11;
    next();
  }, 1000);
});
asyncApp.use(function (ctx, next) {
  console.log(ctx.count);
  ctx.count = 2;
  next();
});
asyncApp.use(function (ctx, next) {
  console.log(ctx.count);
  ctx.count = 3;
  next();
});
asyncApp.run(ctx);
