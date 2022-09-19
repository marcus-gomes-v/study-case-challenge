const bestProfessionRequirement = (req, _, next) => {
  req.checkQuery({
    start: {
      optional: {
        options: { checkFalsy: false },
      },
      isDate: {
        options: {
          format: 'YYYY-MM-DD',
          strictMode: true,
        },
        errorMessage: 'The start param must be a valid date: {YYYY-MM-DD}',
      },
    },
    end: {
      optional: {
        options: { checkFalsy: false },
      },
      isDate: {
        options: {
          format: 'YYYY-MM-DD',
          strictMode: true,
        },
        errorMessage: 'The end param must be a valid date: {YYYY-MM-DD}',
      },
    },
  });

  next();
};

module.exports = bestProfessionRequirement;
