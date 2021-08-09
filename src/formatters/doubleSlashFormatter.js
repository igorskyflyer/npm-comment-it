const { CommonFormatter, multilineFormatter } = require('./commonFormatters')

module.exports = {
  single: CommonFormatter.DoubleSlash,
  /**
   *
   * @param {string} value
   * @returns {string}
   */
  multi: (value) => multilineFormatter(value, '//'),
}
