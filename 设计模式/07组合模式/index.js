class Folder {
  constructor(name) {
    this.name = name;
    this.files = [];
  }

  add(file) {
    this.files.push(file);
  }

  scan() {
    console.log(this.name);
    this.files.forEach((f) => {
      f.scan();
    });
  }
}

class File {
  constructor(name) {
    this.name = name;
  }

  add(file) {
    throw '不能add';
  }

  scan() {
    console.log(this.name);
  }
}

const folder = new Folder('学习书籍');
const folder1 = new Folder('js 书籍');
const folder2 = new Folder('计算机网络 书籍');
const file1 = new Folder('js 语言精粹');
const file2 = new Folder('js 1');
const file3 = new Folder('js 2');
const file4 = new Folder('图解http');

folder.add(folder1);
folder.add(folder2);
folder1.add(file1);
folder1.add(file2);
folder1.add(file3);
folder2.add(file4);

folder.scan();
