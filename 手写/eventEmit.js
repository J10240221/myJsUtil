
/**
 * 3. 请实现一个 Node.js 中的事件模型（EventEmitter）,要求包含 on、off、once、emit 四个方法
 * 参考文档：https://nodejs.org/dist/latest-v14.x/docs/api/events.html
 */

class EventEmitter {
  eventCache = {
      // name: [],
  }
  on(name, lister) {
      if (!this.eventCache[name]) {
          this.eventCache[name] = []
      }

      this.eventCache[name].push(lister)
  }

  off(name) {
      delete this.eventCache[name]
  }

  once(name, ...args) {
      this.eventCache[name] = function onceWarp() {
          this.emit(name, ...args);
          this.off(name)
      }
  }
  emit(name, ...args) {
      (this.eventCache[name] || []).forEach(fn => {
          fn(...args)
      })
  }
}

