// 千分符
function format(params: number) {
  const [int, dec] = `${params}`.split('.');
  // 从 右往左，取模3，插入一个逗号
  const result: string[] = [];
  for (let i = 0; i < int.length; i++) {
    if (i % 3 === 0 && i !== 0) {
      result.push(',');
    }
    const val = int[int.length - i - 1];
    result.push(val);
  }
  const intPart = result.reverse().join('');
  return dec ? `${intPart}.${dec}` : intPart;
}

console.log(
  format(123456.66) === '123,456.66',
  format(12345678.99) === '12,345,678.99',
  format(12.33) === '12.33',
);
