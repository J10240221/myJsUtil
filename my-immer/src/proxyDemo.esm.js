// function d() {
//   window.state = {};
//   window.xx = new Proxy(state, {
//     get: function (target, propKey, receiver) {
//       console.log(`getting ${propKey}!`);
//       return Reflect.get(target, propKey, receiver);
//     },

//     set: function (target, propKey, value, receiver) {
//       console.log(`setting ${propKey}!`);
//       return Reflect.set(target, propKey, value, receiver);
//     },
//   });
// }

const objectTraps = {
  get(state, prop) {
    const value = state[prop];

    state.copy_ = shallowCopy(state);
    return (state.copy_[prop] = createProxy(value, state));
  },
};

const createProxy = (target, parent) => {
  const { revoke, proxy } = Proxy.revocable(target, objectTraps);
  return proxy;
};

const shallowCopy = (o) => {
  return typeof o === 'object' ? { ...o } : o;
};

function produce(state, fn) {
  const p = createProxy(state);
  fn(p);
  return state.copy_;
}

export { produce };
