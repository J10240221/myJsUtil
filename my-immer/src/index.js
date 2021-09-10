// import { produce } from 'immer';
import { produce } from './proxyDemo.esm.js';

const a = {
  a: { aa: 1 },
  b: {
    bb: { bbb: { bbbb: 2 } },
  },
  c: { cc: 3 },
};
globalThis.a = a;

const newA = produce(a, (draft) => {
  draft.b.bb.bbb.bbbb = 10;
});
// a.a = 3;
console.log('newA', newA);

// console.log(descr(a));

// newA !== a;
// console.log('🚀 ~ file: test.js ~ line 20 ~ newA !== a', newA !== a);
// newA.a === a.a;
// console.log('🚀 ~ file: test.js ~ line 22 ~ newA.a === a.a', newA.a === a.a);
// newA.c === a.c;
// console.log('🚀 ~ file: test.js ~ line 24 ~ newA.c === a.c', newA.c === a.c);
// newA.b !== a.b;
// console.log('🚀 ~ file: test.js ~ line 26 ~ newA.b !== a.b', newA.b !== a.b);
