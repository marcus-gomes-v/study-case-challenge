const { handleExpressError } = require('./handler');

const appEmmiter = require('../server/emmiter');

const { EXPRESS_ERROR } = appEmmiter.events;

const expressErrorHandler = (app) => {
  app.use((err, req, res, _) => {
    appEmmiter.emit(EXPRESS_ERROR, { req, error: err });

    const error = handleExpressError(err);
    const status = error.status || 500;

    res.status(status).send(error);
  });
};

module.exports = expressErrorHandler;
