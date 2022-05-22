/**
children[i]: 胃口尺寸
【2，3，4】

cookies[j]: 饼干尺寸
【1，2，3，4】

先排序
用最小需求的小孩，去消费，最小的饼干，如果不满足，消费第二小的，
 */
function findContentChildren(children: number[], cookies: number[]): number {
  const orderChild = [...children].sort((a, b) => a - b);
  let orderCookies = [...cookies].sort((a, b) => a - b); // 避免修改 入参
  console.log(orderChild);
  console.log(orderCookies);

  // 消费饼干
  let childIndex = 0;
  let cookieIndex = 0;
  const childLen = orderChild.length;
  const cookieLen = orderCookies.length;
  while (childIndex < childLen && cookieIndex < cookieLen) {
    if (orderChild[childIndex] <= orderCookies[cookieIndex]) {
      childIndex++;
    }
    cookieIndex++;
  }
  console.log(childIndex);
  return childIndex;
}

const chi = [10, 9, 8, 7];
const coo = [5, 6, 7, 8];

findContentChildren(chi, coo);
