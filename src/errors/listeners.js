const oServerEmitter = require('../server/emmiter');

const logError = sLogData => console.error(sLogData)

const setupLogExpressError = (errorLogger, eventName) => ({ req, error }) => errorLogger({
  params: req.params,
  body: req.body,
  method: req.method,
  headers: req.headers,
  url: req.originalUrl,
  logEvent: {
    severity: 'ERROR',
    eventName,
    eventData: {
      error,
    },
  },
});

exports.logExpressError = setupLogExpressError(logError, oServerEmitter.events.EXPRESS_ERROR);