// const produce = (state, mutationFn) => {
//   // mutationFn ====> draft => draft.x.xx = 2;
//   new Proxy(state, {
//     get: function (target, propKey, receiver) {
//       console.log(`getting ${propKey}!`);
//       return Reflect.get(target, propKey, receiver);
//     },
//     set: function (target, propKey, value, receiver) {
//       console.log(`setting ${propKey}!`);
//       return Reflect.set(target, propKey, value, receiver);
//     },
//   });
// };

// export { produce };
