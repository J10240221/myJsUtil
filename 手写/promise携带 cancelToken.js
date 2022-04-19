// 例子：
// const CancelToken = axios.CancelToken;
// const source = CancelToken.source();

// axios.post(
//   "/user/12345",
//   {
//     name: "new name",
//   },
//   {
//     cancelToken: source.token,
//   }
// );

// cancel the request (the message parameter is optional)
// source.cancel("Operation canceled by the user.");

// 实现 一个 promise 还未 resolve 时候，可以 手动 cancel
function callAsync(arg) {
  let cancelToken;
  const cancelPromise = new Promise((res) => {
    cancelToken = res;
  });
  const ret = new Promise((res, reject) => {
    cancelPromise.then((reason) => {
      reject(reason);
    });
    setTimeout(() => {
      res(arg);
    }, 4000);
  });
  return { ret, cancelToken };
}

const { ret, cancelToken } = callAsync("i am happy");
ret
  .then((rr) => {
    console.log(rr);
  })
  .catch((reason) => {
    console.log(reason);
  });

setTimeout(() => {
  cancelToken("nonono");
}, 1000);
