const { EventEmitter } = require('events')

const events = {
  EXPRESS_ERROR: 'expressError',
}

class cServerEmitter extends EventEmitter {
  constructor() {
    super();
    this.events = events;
  }
}

const oServerEmitter = new cServerEmitter();

module.exports = oServerEmitter;
