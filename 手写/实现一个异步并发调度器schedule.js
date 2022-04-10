//支持并发的调度器， 最多允许2两任务进行处理
/* const scheduler = new Scheduler(2)
scheduler.addTask(1, '1’);   // 1s后输出’1'
scheduler.addTask(2, '2’);  // 2s后输出’2'
scheduler.addTask(1, '3’);  // 2s后输出’3'
scheduler.addTask(1, '4’);  // 3s后输出’4'
scheduler.start();
————————————————
版权声明：本文为CSDN博主「codeAX」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/qq_44831027/article/details/112148472 */

class Scheduler {
  constructor(maxConcSize) {
    this.maxConcSize = maxConcSize;
    this.waitedQueue = [];
    this.doingQueue = [];
  }

  addTask(timer, arg) {
    this.waitedQueue.push(() => {
      return new Promise((res) => {
        setTimeout(() => {
          console.log(arg);
          res();
        }, timer * 1000);
      });
    });
  }

  enqueueDoing() {
    this.doingQueue.push(this.waitedQueue.shift());
    this.flushQueue();
  }

  flushQueue() {
    while (this.doingQueue.length > 0) {
      const task = this.doingQueue.shift();
      task().finally(() => {
        if (this.waitedQueue.length) {
          this.enqueueDoing();
        }
      });
    }
  }

  start() {
    while (
      this.doingQueue.length < this.maxConcSize &&
      this.waitedQueue.length > 0
    ) {
      this.enqueueDoing();
    }
  }
}

const scheduler = new Scheduler(2);
scheduler.addTask(1, "1"); // 1s后输出’1'
scheduler.addTask(3, "2"); // 3s后输出’2'
scheduler.addTask(2, "3"); // 2s后输出’3'
scheduler.addTask(2, "4"); // 3s后输出’4'
scheduler.start();
