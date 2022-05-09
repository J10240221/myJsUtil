/* 
给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。答案可以按 任意顺序 返回。

给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。



 

示例 1：

输入：digits = "23"
输出：["ad","ae","af","bd","be","bf","cd","ce","cf"]
示例 2：

输入：digits = ""
输出：[]
示例 3：

输入：digits = "2"
输出：["a","b","c"]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
function letterCombinations(digits: string): string[] {
  const map: any = { 2: "abc", 3: "def", 4: "ghi" };
  const result: string[] = [];
  dfs(digits, 0, "");

  function dfs(digArr: string, index: number, str: string) {
    if (index === digArr.length) {
      // 最后一项 都结束了
      result.push(str);
    } else {
      const dig = digArr[index];
      const letterList: any = map[dig];
      [...letterList].forEach((letter) => {
        dfs(digArr, index + 1, str + letter);
      });
    }
  }

  console.log(result);
  return result;
}

letterCombinations("23");
