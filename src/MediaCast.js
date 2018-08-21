import Dispatcher from './Dispatcher';
import { injectSenderScript } from './Util';

export default class MediaCast extends Dispatcher {
  constructor() {
    this.ready = false;
    injectSenderScript
      .then(this._onReady)
      .catch(e => console.log('Error Loading ChromeCast Sender Script', e));
  }

  _onReady() {
    this.ready = true;
    this.dispatch('READY');
  }

  play() {}

  pause() {}

  stop() {}

  next() {}

  prev() {}
}
