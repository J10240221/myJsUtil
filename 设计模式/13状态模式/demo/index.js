var ALightState = /** @class */ (function () {
    function ALightState() {
    }
    return ALightState;
}());
var LightOffState = /** @class */ (function () {
    function LightOffState(light) {
        this.light = light;
    }
    LightOffState.prototype.onBtnPressed = function () {
        console.log('打开弱灯');
        this.light.setState(this.light.weakLightState);
    };
    return LightOffState;
}());
var weakLightState = /** @class */ (function () {
    function weakLightState(light) {
        this.light = light;
    }
    weakLightState.prototype.onBtnPressed = function () {
        console.log('打开普通灯');
        this.light.setState(this.light.normalLightState);
    };
    return weakLightState;
}());
var NormalLightState = /** @class */ (function () {
    function NormalLightState(light) {
        this.light = light;
    }
    NormalLightState.prototype.onBtnPressed = function () {
        console.log('关灯');
        this.light.setState(this.light.offState);
    };
    return NormalLightState;
}());
var Light = /** @class */ (function () {
    function Light() {
        this.offState = new LightOffState(this);
        this.normalLightState = new NormalLightState(this);
        this.weakLightState = new weakLightState(this);
        this.btn = null;
    }
    Light.prototype.init = function () {
        var self = this;
        this.state = this.offState;
        this.btn = document.createElement('button');
        this.btn.innerHTML = '开关';
        this.btn.onclick = function (ev) {
            self.state.onBtnPressed();
        };
        document.body.appendChild(this.btn);
    };
    Light.prototype.setState = function (currState) {
        this.state = currState;
    };
    return Light;
}());
var light = new Light();
light.init();
// l.onBtnPressed();
// l.onBtnPressed();
// l.onBtnPressed();
// l.onBtnPressed();
// l.onBtnPressed();
