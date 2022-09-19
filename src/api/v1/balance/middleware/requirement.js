const requirement = (req, _, next) => {
  req.checkBody({
    amount: {
      notEmpty: true,
      errorMessage: 'The amount is required'
    }
  })

  next()
}

module.exports = {
  requirement
}