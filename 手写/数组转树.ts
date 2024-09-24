/**
 * 将平铺的结构转换为树形结构
 * 每个节点只有一个父节点，根节点的 parentId 为 null
 */
interface IItem {
  id: number;
  parentId: null | number;
}

interface ITreeItem extends IItem {
  children?: ITreeItem[];
}

const input = [
  { id: 1, parentId: null },
  { id: 5, parentId: 2 },
  { id: 2, parentId: 1 },
  { id: 3, parentId: 1 },
  { id: 4, parentId: 2 },
  { id: 6, parentId: 3 },
];

const output = {
  id: 1,
  parentId: null,
  children: [
    {
      id: 2,
      parentId: 1,
      children: [
        { id: 4, parentId: 2, children: [] },
        { id: 5, parentId: 2, children: [] },
      ],
    },
    {
      id: 3,
      parentId: 1,
      children: [{ id: 6, parentId: 3, children: [] }],
    },
  ],
};

/** 通用的递归解法 */
const arrayToTree = (
  arr: ITreeItem[],
  /** 哨兵， */
  result: ITreeItem | (Omit<ITreeItem, 'id'> & { id: null }) = {
    id: null,
    parentId: null,
    children: [],
  },
): ITreeItem => {
  arr.forEach((item) => {
    if (item.parentId === result.id) {
      result.children = result.children || [];
      result.children.push(item);
      arrayToTree(arr, item);
    }
  });

  if (result.id === null) {
    return result.children?.[0] as ITreeItem;
  }

  return result;
};

/** 2层循环的解法 */
function arrayToTree22(items: any[]) {
  const result = []; // 存放结果集
  const itemMap: Record<string, any> = {}; //

  // 先转成map存储
  for (const item of items) {
    itemMap[item.id] = { ...item, children: [] };
  }

  for (const item of items) {
    const id = item.id;
    const parentId = item.parentId;
    const treeItem = itemMap[id];
    if (parentId === null) {
      result.push(treeItem);
    } else {
      itemMap[parentId].children.push(treeItem);
    }
  }
  return result;
}

console.log(arrayToTree22(input));
