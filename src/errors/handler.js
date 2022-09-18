const handleError = (err = '[Error]') => {
  console.error(`${err.message}`);
  if (err.response) {
    const { data } = err.response;
    console.error(data);
    return err;
  }
  console.error(err);
  return err;
};

const handleExpressError = (err) => {
  if (process.env.NODE_ENV !== 'test') {
    handleError(err, '[Express Error]');
  }
  return err;
};

const handleFatalError = (err) => {
  handleError(err, '[Fatal Error]');
  process.exit(1);
};

module.exports = {
  handleExpressError,
  handleFatalError,
};
