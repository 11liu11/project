export var event = {
  eventObj: {},
  $on(eventName, fn) {
      if (this.eventObj[eventName] === undefined) {
          this.eventObj[eventName] = []
      }
      this.eventObj[eventName].push(fn)
  },
  $emit() {
      let eventName = arguments[0]
      let dataArr = [].concat(Array.prototype.slice(arguments, 1))
      this.eventObj[eventName].forEach(function(i) {
          i(...dataArr)
      }, this);
  },
  destroy(eventName) {
      if (this.eventObj[eventName] !== undefined) {
          delete this.eventObj[eventName]
      }
  }
}
