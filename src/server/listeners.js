const oServerEmitter = require('./emmiter');
const { logExpressError, handleFatalError } = require('../errors');

const addAppListeners = () => {
  process.on('uncaughtException', handleFatalError);
  process.on('unhandledRejection', handleFatalError);
  oServerEmitter.on(oServerEmitter.events.EXPRESS_ERROR, logExpressError);
  return oServerEmitter;
};

module.exports = addAppListeners;
