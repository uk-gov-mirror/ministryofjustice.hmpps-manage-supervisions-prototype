exports.addHelpers = function (env) {
  env.addGlobal('progressPercentage', (progressInMonths, lengthInMonths) => {
    return progressInMonths * 1.0 * 100 / lengthInMonths
  })
}
