export default class Dispatcher {
  constructor() {
    this.listeners = {};
  }
  on(event, method) {
    const list = this.listeners[event] || [];
    if (list.indexOf(method) === -1) {
      this.listeners[event] = [...list, method];
    }
  }
  off(event, method) {
    const list = this.listeners[event];
    if (list) {
      this.listeners[event] = list.filter(m => m !== method);
    }
  }
  dispatch(event, data) {
    const list = this.listeners[event];
    if (list) {
      list.forEach(m => m(data));
    }
  }
  destroy() {
    this.listeners = {};
  }
}
