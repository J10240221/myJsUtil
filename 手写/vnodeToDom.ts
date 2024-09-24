// 25 手写-将虚拟 Dom 转化为真实 Dom（类似的递归题-必考）
const input: Item = {
  tag: 'DIV',
  attrs: {
    id: 'app',
  },
  children: [
    {
      tag: 'SPAN',
      children: [
        {
          tag: 'A',
          children: [
            123,
            {
              tag: 'DIV',
              children: [],
            },
          ],
        },
      ],
    },
    {
      tag: 'SPAN',
      children: [
        { tag: 'A', children: [] },
        { tag: 'A', children: [] },
      ],
    },
  ],
};

interface I {
  tag: string;
  attrs?: Record<string, string>;
  children: Item[];
}

type Item = I | string | number;

// 把上诉虚拟Dom转化成下方真实Dom
// const output: any = (
//   <div id="app">
//     <span>
//       <a>
//         123
//         <div></div>
//       </a>
//     </span>
//     <span>
//       <a></a>
//       <a></a>
//     </span>
//   </div>
// );

/**
 * 思路：递归处理
 * 归约为  单节点处理，然后在必要的时候 递归处理
 * @param vnode 
 * @returns 
 */
export function vNodeToDom(vnode: Item) {
  if (typeof vnode === 'number') {
    vnode = String(vnode);
  }

  if (typeof vnode === 'string') {
    return document.createTextNode(vnode);
  }

  const node = document.createElement(vnode.tag);
  if (vnode.attrs) {
    Object.entries(vnode.attrs).forEach(([attrKey, val]) => {
      node.setAttribute(attrKey, val);
    });
  }

  if (vnode.children?.length > 0) {
    vnode.children.forEach((child) => {
      node.appendChild(vNodeToDom(child));
    });
  }
  return node;
}

console.log(vNodeToDom(input));
