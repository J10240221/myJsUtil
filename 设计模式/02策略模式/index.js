const formNode = document.getElementById('registerForm');

/**
 * 只实现功能的 版本，
 * 1、onsubmit 函数庞大，缺乏弹性，
 * 2、每次如果有需求变更，都需要深入onsubmit 方法内部，违反 开放-闭合原则
 * 3、无法复用
 */
// formNode.onsubmit = function (e) {
//   e.preventDefault();
//   // 检验
//   if (formNode.useName.value === '') {
//     alert('用户名不能为空');
//     return false;
//   }
//   if (formNode.password.value.length < 6) {
//     alert('密码不能小于6位');
//     return false;
//   }
//   if (formNode.photoNumber.value.length !== 11) {
//     alert('手机号需要11位');
//     return false;
//   }
//   alert('success');
// };

// 实现 策略模式的 校验
// 大致思路，需要一个 策略类，和一个 环境类，环境类使用策略类中的策略
// 策略类 是纯粹的，只有策略的，而 环境类则 是 引用 策略，并且 可以处理 些接口统一的问题
const strategies = {
  noEmpty: (value, errorMsg) => {
    if (value === '') {
      return errorMsg;
    }
  },
  minLength: (value, length, errorMsg) => {
    if (value.length < length) {
      return errorMsg;
    }
  },
  isPhoneNumber: (value, errorMsg) => {
    if (value.length !== 11) {
      return errorMsg;
    }
  },
};

// Validator 作为 Context,处理 其他逻辑，比如 formNode.useName.value的取值
const Validator = function () {
  this.cache = []; // 保存添加进来的校验规则
};

Validator.prototype.addValid = function (formItemNode, rule, errMsg) {
  this.cache.push({
    formItemNode,
    rule,
    errMsg,
  });
};

Validator.prototype.startValid = function () {
  let errorMsgs = [];
  this.cache.forEach(({ formItemNode, rule, errMsg }) => {
    let ruleArr = rule.split(':');
    const resRule = ruleArr.shift();
    const err = strategies[resRule](formItemNode.value, ...[...ruleArr, errMsg]);
    if (err) {
      errorMsgs.push(err);
    }
  });
  return errorMsgs;
};

const validFunc = () => {
  // 使用
  const validHelp = new Validator();
  validHelp.addValid(formNode.useName, 'noEmpty', '不能空哦');
  validHelp.addValid(formNode.password, 'minLength:3', '最少3位哦');
  validHelp.addValid(formNode.photoNumber, 'isPhoneNumber', '需要11位电话哦');

  const errorMsgs = validHelp.startValid();
  return errorMsgs;
};

formNode.onsubmit = function (e) {
  e.preventDefault();
  const errorMsgs = validFunc();
  if (errorMsgs.length > 0) {
    console.log('异常啦');
    alert(errorMsgs[0]);
    return false; // 阻止表单提交
  }
  console.log('ok');
};
