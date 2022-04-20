type Partial<T> = { [P in keyof T]?: T[P] };

type Required<T> = { [P in keyof T]-?: T[P] };

type Readonly<T> = { readonly [P in keyof T]: T[P] };

type Pick<T, K extends keyof T> = { [P in K]: T[P] };

type Record<K extends keyof any, T> = { [P in K]: T };

type Exclude<T, U> = T extends U ? never : T;

type Extract<T, U> = T extends U ? T : never;

type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;

type NonNullable<T> = T extends null | undefined ? never : T;

type Parameters<T extends (...args: any) => any> = T extends (
  ...args: infer P
) => any
  ? P
  : never;

type ConstructorParameters<T extends abstract new (...args: any) => any> =
  T extends abstract new (...args: infer P) => any ? P : never;

type ReturnType<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer R
  ? R
  : any;

//----------- 嵌套partial -------------- //
type RecursivePartial<T> = {
  [P in keyof T]?: RecursivePartial<T[P]>;
};

//返回 Promise 的 函数类型
type PromiseReturnFn<Output = any, Input = any> = FunctionType<
  Promise<Output>,
  Input
>;

/** 获取 组件的 props */
type GetComponentProps<T> = T extends
  | React.ComponentType<infer P>
  | React.Component<infer P>
  ? P
  : never;

/** 获取 Promise的 拆包的值 */
type GetUnWrapPromiseValue<P extends Promise<any>> = P extends Promise<infer R>
  ? R
  : never;

/** 获取函数的第一个参数 */
type GetFirstParam<F extends (...args: any) => any> = Parameters<F>[0];
