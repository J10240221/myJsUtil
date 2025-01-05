// 一个人的描述有如下三个维度, 请输出所有的情况
const dim: string[][] = [
  ['高', '矮'],
  ['长发', '短发', '光头'],
  ['男', '女'],
];

/**
 * 思路：
 * 归约成 f(params单个 和 result 的笛卡尔积
 * @param params
 * @param result
 */
// const getAllCase = (params: string[][], result: string[][] = [['']]): string[][] => {
//   if (params.length === 0) return result;
//   const [curr, ...rest] = params;

//   let newResult: string[][] = [];
//   curr.forEach((item) => {
//     result.forEach((it) => {
//       newResult.push([item, ...it]);
//     });
//   });
//   return getAllCase(rest, newResult);
// };

// console.log(getAllCase(dim).map((item) => item.join()));
// 输出： ['高长发男', '高长发女', '高短发男', '高短发女', '高光头男', '高光头女','矮长发男', '矮长发女', '矮短发男', '矮短发女','矮光头男', '矮光头女']

const getAllCase = (params: string[][]): string[][] => {
  const result: string[][] = [];
  const bt = (index: number, singleResult: string[] = []) => {
    // 达到了条件，则存入结果集中
    if (singleResult.length === params.length) {
      result.push([...singleResult]);
      // 到底了最深，结束递归
      return;
    }

    // 超出边界
    if (index >= params.length) return;

    const target = params[index];

    target.forEach((item) => {
      singleResult.push(item);
      bt(index + 1, singleResult);
      singleResult.pop();
    });
  };

  bt(0);

  return result;
};

console.log(getAllCase(dim).map((item) => item.join()));

// /*
//  * 比如 nums = [1,2]
//  * ===> [1,2], [2,1]
//  */
// const getA = (nums: number[]): number[][] => {
//   const result: number[][] = [];
//   const bt = (params: number[], tempResult: number[] = []) => {
//     if (tempResult.length === nums.length) {
//       result.push([...tempResult]);
//     }
//     params.forEach((ele, index, arr) => {
//       tempResult.push(ele);
//       const rest = arr.filter((_, i) => i !== index);
//       bt(rest, tempResult);

//       tempResult.pop();
//     });
//   };
//   bt(nums);
//   return result;
// };
// console.log(getA([1, 2, 3]));
