const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');

btn3.click = (receiver, commander) => {
  commander.execute();
};

const commander = (receiver) => {
  receiver.click = () => {
    console.log('111');
  };
};

// TODO: 支持 撤销
