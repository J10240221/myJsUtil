// async function aFn() {
//   var d = await new Promise((res) => {
//     Math.random() > 0.5 ? res() : void 0;
//   });
//   console.log('end in aFn,', d);
// }
// aFn();
// console.log('out end');

const request = (url) => {
  return Promise.resolve(`response data from ${url}`);
};
// request 是一个返回
function* foox(url) {
  // 第一步
  try {
    console.log('request url', url);
    const temp = request(url);

    // 第二步
    let a = yield temp;
    if (a > 0) {
      a = yield a + 1;
    }
    console.log('a', a);
    // return undefined;
  } catch (error) {
    // 第三步
    console.log(error);
    return false;
  }
}

/** 手工 编译器 */
function foo(url) {
  // 通过闭包 保留函数的执行环境栈
  let a;
  let step;

  function process(nextVal) {
    switch (step) {
      case 1: {
        console.log('request url', url);
        return request(url);
      }
      case 2: {
        a = nextVal;
        console.log('a', a);

        return undefined;
      }
      case 3: {
        // 放内部即可，其他地方没有使用到，不需要闭包持久保存
        error = nextVal;
        console.log(error);
        return false;
      }

      default:
        break;
    }
  }

  // 返回一个迭代器
  return {
    next(inVal) {
      if (!step) {
        step = 1;
        return { value: process(), done: false };
      } else if (step === 1) {
        step = 2;
        return { value: process(inVal), done: true };
      } else {
        return { value: undefined, done: true };
      }
    },
    throw(err) {
      if (step === 1) {
        step = 3;
        return { value: process(err), done: true };
      } else {
        throw err;
      }
    },
  };
}

const a = foo('www.baidu.com'); // 获取迭代器，aa内部实际上 并未执行
const val1 = a.next('1传入啥都没用哦'); // 启动
console.log('val1', val1);
const val2 = a.next('2');
console.log('val2', val2);
const val3 = a.next('3');
console.log('val3', val3);
/* 
request url www.baidu.com
val1 { value: Promise { 'response data from www.baidu.com' }, done: false }
a 2
val2 { value: undefined, done: true }
val3 { value: undefined, done: true }

request url www.baidu.com
val1 { value: Promise { 'response data from www.baidu.com' }, done: true }
a Promise { 'response data from www.baidu.com' }
val2 { value: undefined, done: true }
3
val3 { value: false, done: false }
 */
