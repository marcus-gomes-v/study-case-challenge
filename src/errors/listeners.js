const oServerEmitter = require('../server/emmiter');

const logErrorEvent = sLogData => console.error(sLogData)

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

exports.logExpressError = setupLogExpressError(logErrorEvent, oServerEmitter.events.EXPRESS_ERROR);