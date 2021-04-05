abstract class ALightState {
  abstract onBtnPressed: () => void;
}

type LightState = null | 'weakLight' | 'normalLight' | 'off';

class LightOffState implements ALightState {
  light: Light;
  constructor(light) {
    this.light = light;
  }
  onBtnPressed() {
    console.log('打开弱灯');
    this.light.setState(this.light.weakLightState);
  }
}
class weakLightState implements ALightState {
  light: Light;
  constructor(light) {
    this.light = light;
  }
  onBtnPressed() {
    console.log('打开普通灯');
    this.light.setState(this.light.normalLightState);
  }
}
class NormalLightState implements ALightState {
  light: Light;
  constructor(light) {
    this.light = light;
  }
  onBtnPressed() {
    console.log('关灯');
    this.light.setState(this.light.offState);
  }
}

/**
 * 使用 状态模式，封装对象的 状态(与通常封装对象的行为 刚好相反)
 * 把行为封装在 各个状态类内部
 * 当按下btn时，Context 类 只需要 把请求委托 给对应的 状态类 即可
 * 让 原本在 Context 中 充斥着的 庞大逻辑，各种 if else
 * 局部化 到各个状态类中
 */
class Light {
  state: ALightState;
  offState: LightOffState;
  normalLightState: NormalLightState;
  weakLightState: weakLightState;
  btn: HTMLButtonElement;
  constructor() {
    this.offState = new LightOffState(this);
    this.normalLightState = new NormalLightState(this);
    this.weakLightState = new weakLightState(this);
    this.btn = null;
  }

  init() {
    const self = this;
    this.state = this.offState;
    this.btn = document.createElement('button');
    this.btn.innerHTML = '开关';
    this.btn.onclick = function (ev) {
      self.state.onBtnPressed();
    };
    document.body.appendChild(this.btn);
  }

  setState(currState: ALightState) {
    this.state = currState;
  }
}

const light = new Light();
light.init();
