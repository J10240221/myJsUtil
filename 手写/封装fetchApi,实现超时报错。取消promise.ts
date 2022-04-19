const myFetch = (RequestInfo: RequestInfo, timeout = 10000) => {
  const reqPro = fetch(RequestInfo);
  const helpPro = new Promise((res, rej) => {
    setTimeout(() => {
      res({ type: "timeout", message: "请求超时", status: 504 });
    }, timeout);
  });

  return Promise.race([reqPro, helpPro]);
};

//
