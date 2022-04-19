var simplifyPath = function (path: string) {
  const names = path.split("/");
  const stack = [];
  for (const name of names) {
    if (name === "..") {
      if (stack.length) {
        stack.pop();
      }
    } else if (name.length && name !== ".") {
      stack.push(name);
    }
  }

  return "/" + stack.join("/");
};

const demo = "/home///./a/../";

console.log(simplifyPath(demo));
